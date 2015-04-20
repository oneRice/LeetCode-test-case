/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode *sortedArrayToBST(vector<int> &num) {
        if(num.empty())
            return NULL;
        int size = num.size();
        int mid = size / 2;
        TreeNode* root = new TreeNode(num[mid]);
        vector<int> left(num.begin()+0, num.begin()+mid);
        root->left = sortedArrayToBST(left);
        vector<int> right(num.begin()+mid+1, num.begin()+size);
        root->right = sortedArrayToBST(right);
        return root;
    }
};
