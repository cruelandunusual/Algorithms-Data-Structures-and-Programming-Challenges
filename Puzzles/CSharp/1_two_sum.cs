/*
LeetCode Problem 1: Two Sum
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.
*/


static int[] TwoSum(int[] nums, int target)
{
    int[] result = new int[2];
    bool found = false;
    while (!found)
    {
        for (int i = 0; i < nums.Length - 1; i++)
        {
            for (int j = i + 1; j < nums.Length; j++)
            {
                if (nums[i] + nums[j] == target && !found)
                {
                    result[0] = i;
                    result[1] = j;
                    found = true;
                    break;
                }
            }
            if (found) { break; }
        }
    }
    return result;
}

// Input:
//int[] nums1 = [96, 7, 11, 16, 70, 84, 94, 1];
//int target1 = 95; // expected [2, 5]
int[] nums2 = [-2, -2, 0, -1, 1];
int target2 = -4; // expected [0, 1]
foreach (var num in TwoSum(nums2, target2))
{
    Console.WriteLine(num.ToString());
}
