
// * Definition for singly-linked list.
function ListNode(val) {
    this.val = val;     this.next = null;
 }
 // */
 /**
  * @param {ListNode} l1
  * @param {ListNode} l2
  * @return {ListNode}
  */
 var addTwoNumbers = function(l1, l2) {
     const temp = new ListNode(0);
     let currL1 = l1;
     let currL2 = l2;
     let curr = temp;
     let carry = 0;
     
     
     while(currL1 || currL2){
         let sum = (currL1 ? currL1.val : 0) + (currL2 ? currL2.val : 0) + carry;
         carry = parseInt(sum / 10);
         curr.next = new ListNode(sum % 10);
         curr = curr.next;
         if(currL1) currL1 = currL1.next;
         if(currL2) currL2 = currL2.next;
     }
     console.log(carry);
     if(carry) {
         curr.next = new ListNode(carry);
     }
     
     return temp.next;
 };
 
//\\ subStr unique 

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
    let curr = 0;
    let hash = {}; 
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        console.log(hash, s[i], hash[s[i]]);
        if(hash[s[i]] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        max_len = Math.max(max_len, curr);
        hash[s[i]] = i; //save the index
    }
    return max_len;
};

// largest pallindrome