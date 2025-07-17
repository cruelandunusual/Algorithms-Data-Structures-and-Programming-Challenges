function New-MakeFile {
    <#
    .SYNOPSIS
    Creates a new Makefile with the specified name.

    .DESCRIPTION
    This function generates a basic Makefile with the given name and includes a default target.

    .PARAMETER name
    The name of the Makefile to create.

    .EXAMPLE
    New-MakeFile -name "Makefile"
    #>
    
    param (
        [Parameter(Mandatory = $true)]
        [string]$name
    )
    $name = Get-item $name
    $content = "all: $name`n"
    $content += "    @echo Building $name`n"
    $content += "    gcc -o -Wall $name main.c`n"
    $content += "clean:`n"
    $content += "    @echo Cleaning up`n"
    $content += "    rm -f $name`n"
    $content += "    @echo Done`n"
    $content += "run:`n"
    $content += "    @echo Running $name`n"
    $content += "    ./$($name)`n"
Out-File -FilePath 'makefile' -Encoding UTF8 -Force -InputObject $content
    Write-Host "Makefile '$name' created successfully."
}
