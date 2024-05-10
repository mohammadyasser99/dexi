import { useState } from "react";
import { BackToHome } from "../App";

const ChallengeOne = () => {
  function findIndexToRemove(str) {
    // Helper function to check if a substring is a palindrome
    function isPalindrome(s, start, end) {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            // Check if removing left or right index helps
            if (isPalindrome(str, left + 1, right)) {
                return left;  // Removing the character at 'left' index can make it a palindrome
            } else if (isPalindrome(str, left, right - 1)) {
                return right; // Removing the character at 'right' index can make it a palindrome
            } else {
                return -1; // More than one character needs to be removed, no single index solution
            }
        }
        left++;
        right--;
    }

    // If the loop completes without finding non-matching characters
    return -1; // It's already a palindrome or no single index solution
}

// Testing the function with examples
// console.log(findIndexToRemove("aaab"));    // Expected output: 3
// console.log(findIndexToRemove("acxycab")); // Expected output: -1

const[Output , setOutput] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
setOutput(findIndexToRemove(e.target[0].value));

}
  return (
    <>
      <BackToHome />
      <h1 className="title is-1 has-text-white">Challenge 1</h1>
      <h2 className="subtitle has-text-white">
        Given a<code>string</code> of lowercase letters in the range ascii[a-z],
        determine the <code>index</code> of the one character that can be
        <code>removed</code> to make the string a palindrome. If the word is
        already a palindrome or there is no <code>"only one index"</code>{" "}
        solution, which means that we have to remove more than one, return{" "}
        <code>-1</code>. Otherwise, return the <code>index</code>
        of the character to remove.
      </h2>
      <h1 className="title is-1 has-text-white">Example</h1>
      <h2 className="subtitle has-text-white">
        <p>aaab</p>
        <p>acxycab</p>

        <p> Output </p>
        <p>3</p>
        <p>-1</p>
      </h2>
     <h1>
      output : <span style={{color:'red'}}>{Output}</span>
     </h1>
      <form onSubmit={handleSubmit}>
      <input />
      <button className="purpleButton"> Submit </button>
      </form>
   
    </>
  );
};

export default ChallengeOne;
