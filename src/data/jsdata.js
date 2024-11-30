export const js = [
  {
    "question": "Write a function to check if a number is positive, negative, or zero.",
    "answer": `function checkNumber(num) { 
      if (num > 0) return 'Positive';
      if (num < 0) return 'Negative';
      return 'Zero';
    }`,
    "output": "checkNumber(5) // 'Positive', checkNumber(-3) // 'Negative', checkNumber(0) // 'Zero'"
  },
  {
    "question": "Write a function to get the current date in 'YYYY-MM-DD' format.",
    "answer": `function getCurrentDate() { 
      const date = new Date();
      return date.toISOString().split('T')[0];
    }`,
    "output": "getCurrentDate() // '2024-11-30'"
  },
  {
    "question": "Write a function to find the average of an array of numbers.",
    "answer": `function average(arr) { 
      const sum = arr.reduce((acc, num) => acc + num, 0);
      return sum / arr.length;
    }`,
    "output": "average([1, 2, 3, 4, 5]) // 3"
  },
  {
    "question": "Write a function to check if a string contains a specific substring.",
    "answer": `function containsSubstring(str, substring) { 
      return str.includes(substring);
    }`,
    "output": "containsSubstring('hello world', 'world') // true, containsSubstring('hello', 'bye') // false"
  },
  {
    "question": "Write a function to convert a string to lowercase.",
    "answer": `function toLowerCase(str) { 
      return str.toLowerCase();
    }`,
    "output": "toLowerCase('HELLO') // 'hello'"
  },
  {
    "question": "Write a function to convert a string to uppercase.",
    "answer": `function toUpperCase(str) { 
      return str.toUpperCase();
    }`,
    "output": "toUpperCase('hello') // 'HELLO'"
  },
  {
    "question": "Write a function to remove whitespace from both ends of a string.",
    "answer": `function trimString(str) { 
      return str.trim();
    }`,
    "output": "trimString('  hello  ') // 'hello'"
  },
  {
    "question": "Write a function to find the index of a substring in a string.",
    "answer": `function indexOfSubstring(str, substring) { 
      return str.indexOf(substring);
    }`,
    "output": "indexOfSubstring('hello world', 'world') // 6"
  },
  {
    "question": "Write a function to repeat a string a specified number of times.",
    "answer": `function repeatString(str, num) { 
      return str.repeat(num);
    }`,
    "output": "repeatString('abc', 3) // 'abcabcabc'"
  },
  {
    "question": "Write a function to check if an array contains a specific element.",
    "answer": `function contains(arr, element) { 
      return arr.includes(element);
    }`,
    "output": "contains([1, 2, 3], 2) // true, contains([1, 2, 3], 4) // false"
  },
  {
    "question": "Write a function to remove all elements from an array.",
    "answer": `function clearArray(arr) { 
      arr.length = 0;
      return arr;
    }`,
    "output": "clearArray([1, 2, 3]) // []"
  },
  {
    "question": "Write a function to replace all occurrences of a substring in a string.",
    "answer": `function replaceSubstring(str, oldSubstr, newSubstr) { 
      return str.split(oldSubstr).join(newSubstr);
    }`,
    "output": "replaceSubstring('hello world', 'world', 'there') // 'hello there'"
  },
  {
    "question": "Write a function to find the first n Fibonacci numbers.",
    "answer": `function fibonacci(n) { 
      let fib = [0, 1];
      for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
      }
      return fib;
    }`,
    "output": "fibonacci(5) // [0, 1, 1, 2, 3]"
  },
  {
    "question": "Write a function to count the number of vowels in a string.",
    "answer": `function countVowels(str) { 
      return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
    }`,
    "output": "countVowels('hello') // 2"
  },
  {
    "question": "Write a function to count the number of words in a string.",
    "answer": `function countWords(str) { 
      return str.split(' ').filter(Boolean).length;
    }`,
    "output": "countWords('Hello world!') // 2"
  },
  {
    "question": "Write a function to find the median of an array of numbers.",
    "answer": `function median(arr) { 
      arr.sort((a, b) => a - b);
      const mid = Math.floor(arr.length / 2);
      return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid];
    }`,
    "output": "median([1, 2, 3, 4, 5]) // 3"
  },
  {
    "question": "Write a function to generate a random string of a given length.",
    "answer": `function randomString(length) { 
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }`,
    "output": "randomString(5) // 'aB1dE'"
  },
  {
    "question": "Write a function to get the current time in 'HH:MM:SS' format.",
    "answer": `function getCurrentTime() { 
      const now = new Date();
      return now.toLocaleTimeString();
    }`,
    "output": "getCurrentTime() // '13:45:30'"
  },
  {
    "question": "Write a function to find the unique elements in an array.",
    "answer": `function uniqueElements(arr) { 
      return [...new Set(arr)];
    }`,
    "output": "uniqueElements([1, 2, 2, 3, 4]) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to get the last n elements of an array.",
    "answer": `function getLastElements(arr, n) { 
      return arr.slice(-n);
    }`,
    "output": "getLastElements([1, 2, 3, 4, 5], 3) // [3, 4, 5]"
  },
  {
    "question": "Write a function to find the sum of squares of numbers in an array.",
    "answer": `function sumOfSquares(arr) { 
      return arr.reduce((sum, num) => sum + num * num, 0);
    }`,
    "output": "sumOfSquares([1, 2, 3]) // 14"
  },
  {
    "question": "Write a function to check if a string contains only digits.",
    "answer": `function isOnlyDigits(str) { 
      return /^\d+$/.test(str);
    }`,
    "output": "isOnlyDigits('123') // true, isOnlyDigits('abc') // false"
  },
  {
    "question": "Write a function to convert a date string to a Date object.",
    "answer": `function stringToDate(dateString) { 
      return new Date(dateString);
    }`,
    "output": "stringToDate('2024-11-30') // Date object"
  },
  {
    "question": "Write a function to check if a string is a valid email address.",
    "answer": `function isValidEmail(str) { 
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(str);
    }`,
    "output": "isValidEmail('test@example.com') // true, isValidEmail('test@com') // false"
  },
  {
    "question": "Write a function to check if a string is a valid URL.",
    "answer": `function isValidURL(str) { 
      const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      return regex.test(str);
    }`,
    "output": "isValidURL('https://www.example.com') // true, isValidURL('www.example.com') // false"
  },
  {
    "question": "Write a function to format a number with commas as thousands separators.",
    "answer": `function formatNumber(num) { 
      return num.toLocaleString();
    }`,
    "output": "formatNumber(1000000) // '1,000,000'"
  },
  {
    "question": "Write a function to compare two strings lexicographically.",
    "answer": `function compareStrings(str1, str2) { 
      return str1.localeCompare(str2);
    }`,
    "output": "compareStrings('apple', 'banana') // -1"
  },
  {
    "question": "Write a function to merge two arrays.",
    "answer": `function mergeArrays(arr1, arr2) { 
      return [...arr1, ...arr2];
    }`,
    "output": "mergeArrays([1, 2], [3, 4]) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to deep clone an object.",
    "answer": `function deepClone(obj) { 
      return JSON.parse(JSON.stringify(obj));
    }`,
    "output": "deepClone({a: 1, b: {c: 2}}) // {a: 1, b: {c: 2}}"
  },
  {
    "question": "Write a function to get the first element of an array.",
    "answer": `function firstElement(arr) { 
      return arr[0];
    }`,
    "output": "firstElement([1, 2, 3]) // 1"
  },
  {
    "question": "Write a function to get the last element of an array.",
    "answer": `function lastElement(arr) { 
      return arr[arr.length - 1];
    }`,
    "output": "lastElement([1, 2, 3]) // 3"
  },
  {
    "question": "Write a function to find the longest word in a string.",
    "answer": `function longestWord(str) { 
      const words = str.split(' ');
      return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
    }`,
    "output": "longestWord('Find the longest word') // 'longest'"
  },
  {
    "question": "Write a function to find the smallest number in an array.",
    "answer": `function findSmallest(arr) { 
      return Math.min(...arr);
    }`,
    "output": "findSmallest([1, 2, 3, 0]) // 0"
  },
  {
    "question": "Write a function to reverse a string.",
    "answer": `function reverseString(str) { 
      return str.split('').reverse().join('');
    }`,
    "output": "reverseString('hello') // 'olleh'"
  },
  {
    "question": "Write a function to check if a number is even or odd.",
    "answer": `function isEven(num) { 
      return num % 2 === 0 ? 'Even' : 'Odd';
    }`,
    "output": "isEven(4) // 'Even', isEven(7) // 'Odd'"
  },
  {
    "question": "Write a function to find the factorial of a number.",
    "answer": `function factorial(n) { 
      if (n === 0) return 1; 
      return n * factorial(n - 1); 
    }`,
    "output": "factorial(5) // 120"
  },
  {
    "question": "Write a function to check if a string is a palindrome.",
    "answer": `function isPalindrome(str) { 
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    }`,
    "output": "isPalindrome('madam') // true, isPalindrome('hello') // false"
  },
  {
    "question": "Write a function to find the largest number in an array.",
    "answer": `function findLargest(arr) { 
      return Math.max(...arr);
    }`,
    "output": "findLargest([1, 5, 3, 9, 2]) // 9"
  },
  {
    "question": "Write a function to find the smallest number in an array.",
    "answer": `function findSmallest(arr) { 
      return Math.min(...arr);
    }`,
    "output": "findSmallest([1, 5, 3, 9, 2]) // 1"
  },
  {
    "question": "Write a function to sum all numbers in an array.",
    "answer": `function sumArray(arr) { 
      return arr.reduce((sum, num) => sum + num, 0);
    }`,
    "output": "sumArray([1, 2, 3, 4]) // 10"
  },
  {
    "question": "Write a function to count occurrences of a number in an array.",
    "answer": `function countOccurrences(arr, num) { 
      return arr.filter(item => item === num).length;
    }`,
    "output": "countOccurrences([1, 2, 3, 2, 1], 2) // 2"
  },
  {
    "question": "Write a function to capitalize the first letter of a string.",
    "answer": `function capitalizeFirstLetter(str) { 
      return str.charAt(0).toUpperCase() + str.slice(1);
    }`,
    "output": "capitalizeFirstLetter('hello') // 'Hello'"
  },
  {
    "question": "Write a function to find the prime numbers in an array.",
    "answer": `function isPrime(num) { 
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    function findPrimes(arr) { 
      return arr.filter(isPrime);
    }`,
    "output": "findPrimes([1, 2, 3, 4, 5, 6, 7]) // [2, 3, 5, 7]"
  },
  {
    "question": "Write a function to remove duplicates from an array.",
    "answer": `function removeDuplicates(arr) { 
      return [...new Set(arr)];
    }`,
    "output": "removeDuplicates([1, 2, 2, 3, 4, 4]) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to sort an array in ascending order.",
    "answer": `function sortArrayAsc(arr) { 
      return arr.sort((a, b) => a - b);
    }`,
    "output": "sortArrayAsc([4, 1, 3, 2]) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to sort an array in descending order.",
    "answer": `function sortArrayDesc(arr) { 
      return arr.sort((a, b) => b - a);
    }`,
    "output": "sortArrayDesc([4, 1, 3, 2]) // [4, 3, 2, 1]"
  },
  {
    "question": "Write a function to merge two arrays.",
    "answer": `function mergeArrays(arr1, arr2) { 
      return [...arr1, ...arr2];
    }`,
    "output": "mergeArrays([1, 2], [3, 4]) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to flatten a nested array.",
    "answer": `function flattenArray(arr) { 
      return arr.flat();
    }`,
    "output": "flattenArray([1, [2, 3], [4, 5]]) // [1, 2, 3, 4, 5]"
  },
  {
    "question": "Write a function to check if a number is prime.",
    "answer": `function isPrime(num) { 
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }`,
    "output": "isPrime(5) // true, isPrime(10) // false"
  },
  {
    "question": "Write a function to find the longest string in an array.",
    "answer": `function findLongestString(arr) { 
      return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
    }`,
    "output": "findLongestString(['apple', 'banana', 'cherry']) // 'banana'"
  },
  {
    "question": "Write a function to merge two sorted arrays into one sorted array.",
    "answer": `function mergeSortedArrays(arr1, arr2) { 
      return [...arr1, ...arr2].sort((a, b) => a - b);
    }`,
    "output": "mergeSortedArrays([1, 3], [2, 4]) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to find the common elements in two arrays.",
    "answer": `function findCommonElements(arr1, arr2) { 
      return arr1.filter(value => arr2.includes(value));
    }`,
    "output": "findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]"
  },
  {
    "question": "Write a function to format a number to two decimal places.",
    "answer": `function formatToTwoDecimals(num) { 
      return num.toFixed(2);
    }`,
    "output": "formatToTwoDecimals(3.14159) // '3.14'"
  },
  {
    "question": "Write a function to generate a random number between two values.",
    "answer": `function randomBetween(min, max) { 
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }`,
    "output": "randomBetween(1, 10) // Random number between 1 and 10"
  },
  {
    "question": "Write a function to convert a string to a number.",
    "answer": `function stringToNumber(str) { 
      return Number(str);
    }`,
    "output": "stringToNumber('123') // 123"
  },
  {
    "question": "Write a function to check if an object is empty.",
    "answer": `function isEmpty(obj) { 
      return Object.keys(obj).length === 0;
    }`,
    "output": "isEmpty({}) // true, isEmpty({name: 'Alice'}) // false"
  },
  {
    "question": "Write a function to remove the first element of an array.",
    "answer": `function removeFirstElement(arr) { 
      arr.shift();
      return arr;
    }`,
    "output": "removeFirstElement([1, 2, 3]) // [2, 3]"
  },
  {
    "question": "Write a function to remove the last element of an array.",
    "answer": `function removeLastElement(arr) { 
      arr.pop();
      return arr;
    }`,
    "output": "removeLastElement([1, 2, 3]) // [1, 2]"
  },
  {
    "question": "Write a function to find the sum of digits of a number.",
    "answer": `function sumOfDigits(num) { 
      return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }`,
    "output": "sumOfDigits(123) // 6"
  },
  {
    "question": "Write a function to convert a number to binary.",
    "answer": `function toBinary(num) { 
      return num.toString(2);
    }`,
    "output": "toBinary(5) // '101'"
  },
  {
    "question": "Write a function to calculate the power of a number.",
    "answer": `function power(base, exponent) { 
      return Math.pow(base, exponent);
    }`,
    "output": "power(2, 3) // 8"
  },
  {
    "question": "Write a function to check if a year is a leap year.",
    "answer": `function isLeapYear(year) { 
      return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    }`,
    "output": "isLeapYear(2020) // true, isLeapYear(2021) // false"
  },
  {
    "question": "Write a function to check if a string starts with a specific substring.",
    "answer": `function startsWith(str, substring) { 
      return str.startsWith(substring);
    }`,
    "output": "startsWith('hello world', 'hello') // true"
  },
  {
    "question": "Write a function to check if a string ends with a specific substring.",
    "answer": `function endsWith(str, substring) { 
      return str.endsWith(substring);
    }`,
    "output": "endsWith('hello world', 'world') // true"
  },
  {
    "question": "Write a function to get the absolute value of a number.",
    "answer": `function absoluteValue(num) { 
      return Math.abs(num);
    }`,
    "output": "absoluteValue(-5) // 5"
  },
  {
    "question": "Write a function to convert a string to a number.",
    "answer": `function stringToNumber(str) { 
      return Number(str);
    }`,
    "output": "stringToNumber('123') // 123"
  },
  {
    "question": "Write a function to capitalize the first letter of a string.",
    "answer": `function capitalizeFirstLetter(str) { 
      return str.charAt(0).toUpperCase() + str.slice(1);
    }`,
    "output": "capitalizeFirstLetter('hello') // 'Hello'"
  },
  {
    "question": "Write a function to round a number to a specified number of decimal places.",
    "answer": `function roundToDecimal(num, places) { 
      return num.toFixed(places);
    }`,
    "output": "roundToDecimal(3.14159, 2) // '3.14'"
  },
  {
    "question": "Write a function to calculate the square root of a number.",
    "answer": `function squareRoot(num) { 
      return Math.sqrt(num);
    }`,
    "output": "squareRoot(16) // 4"
  },
  {
    "question": "Write a function to convert a string to a date object.",
    "answer": `function stringToDate(dateString) { 
      return new Date(dateString);
    }`,
    "output": "stringToDate('2024-11-30') // Date object"
  },
  {
    "question": "Write a function to shuffle the elements of an array.",
    "answer": `function shuffleArray(arr) { 
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }`,
    "output": "shuffleArray([1, 2, 3]) // [2, 1, 3] (random)"
  },
  {
    "question": "Write a function to find the maximum number in an array.",
    "answer": `function findMax(arr) { 
      return Math.max(...arr);
    }`,
    "output": "findMax([1, 2, 3]) // 3"
  },
  {
    "question": "Write a function to find the minimum number in an array.",
    "answer": `function findMin(arr) { 
      return Math.min(...arr);
    }`,
    "output": "findMin([1, 2, 3]) // 1"
  },
  {
    "question": "Write a function to merge two sorted arrays into one sorted array.",
    "answer": `function mergeSortedArrays(arr1, arr2) { 
      return arr1.concat(arr2).sort((a, b) => a - b);
    }`,
    "output": "mergeSortedArrays([1, 3, 5], [2, 4, 6]) // [1, 2, 3, 4, 5, 6]"
  },
  {
    "question": "Write a function to flatten a nested array.",
    "answer": `function flattenArray(arr) { 
      return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
    }`,
    "output": "flattenArray([1, [2, [3, 4]]]) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to find the length of the longest string in an array.",
    "answer": `function longestString(arr) { 
      return Math.max(...arr.map(str => str.length));
    }`,
    "output": "longestString(['apple', 'banana', 'kiwi']) // 6"
  },
  {
    "question": "Write a function to repeat a string a specific number of times.",
    "answer": `function repeatString(str, count) { 
      return str.repeat(count);
    }`,
    "output": "repeatString('abc', 3) // 'abcabcabc'"
  },
  {
    "question": "Write a function to remove an element from an array.",
    "answer": `function removeElement(arr, element) { 
      const index = arr.indexOf(element);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    }`,
    "output": "removeElement([1, 2, 3], 2) // [1, 3]"
  },
  {
    "question": "Write a function to get the nth Fibonacci number.",
    "answer": `function fibonacci(n) { 
      if (n <= 1) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }`,
    "output": "fibonacci(5) // 5"
  },
  {
    "question": "Write a function to check if a number is prime.",
    "answer": `function isPrime(num) { 
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }`,
    "output": "isPrime(7) // true, isPrime(8) // false"
  },
  {
    "question": "Write a function to find the intersection of two arrays.",
    "answer": `function intersection(arr1, arr2) { 
      return arr1.filter(item => arr2.includes(item));
    }`,
    "output": "intersection([1, 2, 3], [2, 3, 4]) // [2, 3]"
  },
  {
    "question": "Write a function to remove duplicate elements from an array.",
    "answer": `function removeDuplicates(arr) { 
      return [...new Set(arr)];
    }`,
    "output": "removeDuplicates([1, 2, 2, 3, 3]) // [1, 2, 3]"
  },
  {
    "question": "Write a function to find the sum of all even numbers in an array.",
    "answer": `function sumEvenNumbers(arr) { 
      return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    }`,
    "output": "sumEvenNumbers([1, 2, 3, 4, 5]) // 6"
  },
  {
    "question": "Write a function to find the sum of all odd numbers in an array.",
    "answer": `function sumOddNumbers(arr) { 
      return arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
    }`,
    "output": "sumOddNumbers([1, 2, 3, 4, 5]) // 9"
  },
  {
    "question": "Write a function to count the occurrences of a specific element in an array.",
    "answer": `function countOccurrences(arr, element) { 
      return arr.filter(item => item === element).length;
    }`,
    "output": "countOccurrences([1, 2, 3, 2], 2) // 2"
  },
  {
    "question": "Write a function to remove all even numbers from an array.",
    "answer": `function removeEvens(arr) { 
      return arr.filter(num => num % 2 !== 0);
    }`,
    "output": "removeEvens([1, 2, 3, 4, 5]) // [1, 3, 5]"
  },
  {
    "question": "Write a function to find the longest number in an array.",
    "answer": `function longestNumber(arr) { 
      return Math.max(...arr.map(String).map(num => num.length));
    }`,
    "output": "longestNumber([123, 4567, 89]) // 4"
  },
  {
    "question": "Write a function to check if an object has a specific property.",
    "answer": `function hasProperty(obj, prop) { 
      return obj.hasOwnProperty(prop);
    }`,
    "output": "hasProperty({a: 1, b: 2}, 'b') // true, hasProperty({a: 1}, 'c') // false"
  },
  {
    "question": "Write a function to convert a number to binary.",
    "answer": `function toBinary(num) { 
      return num.toString(2);
    }`,
    "output": "toBinary(10) // '1010'"
  },
  {
    "question": "Write a function to remove whitespace from both ends of a string.",
    "answer": `function trimString(str) { 
      return str.trim();
    }`,
    "output": "trimString('  hello  ') // 'hello'"
  },
  {
    "question": "Write a function to find the index of an element in an array.",
    "answer": `function findIndex(arr, element) { 
      return arr.indexOf(element);
    }`,
    "output": "findIndex([1, 2, 3], 2) // 1"
  },
  {
    "question": "Write a function to convert a string to lowercase.",
    "answer": `function toLowerCase(str) { 
      return str.toLowerCase();
    }`,
    "output": "toLowerCase('Hello') // 'hello'"
  },
  {
    "question": "Write a function to convert a string to uppercase.",
    "answer": `function toUpperCase(str) { 
      return str.toUpperCase();
    }`,
    "output": "toUpperCase('hello') // 'HELLO'"
  },
  {
    "question": "Write a function to find the unique characters in a string.",
    "answer": `function uniqueChars(str) { 
      return [...new Set(str)].join('');
    }`,
    "output": "uniqueChars('aabbcc') // 'abc'"
  },
  {
    "question": "Write a function to create a string with spaces between each character.",
    "answer": `function addSpaces(str) { 
      return str.split('').join(' ');
    }`,
    "output": "addSpaces('hello') // 'h e l l o'"
  },
  {
    "question": "Write a function to find the average of an array of numbers.",
    "answer": `function average(arr) { 
      return arr.reduce((sum, num) => sum + num, 0) / arr.length;
    }`,
    "output": "average([1, 2, 3, 4, 5]) // 3"
  },
  {
    "question": "Write a function to check if a number is a perfect square.",
    "answer": `function isPerfectSquare(num) { 
      return Math.sqrt(num) % 1 === 0;
    }`,
    "output": "isPerfectSquare(16) // true, isPerfectSquare(18) // false"
  },
  {
    "question": "Write a function to calculate the power of a number.",
    "answer": `function power(base, exponent) { 
      return Math.pow(base, exponent);
    }`,
    "output": "power(2, 3) // 8"
  },
  {
    "question": "Write a function to generate a random number between two values.",
    "answer": `function randomNumber(min, max) { 
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }`,
    "output": "randomNumber(1, 10) // (random number between 1 and 10)"
  },
  {
    "question": "Write a function to replace all instances of a substring in a string.",
    "answer": `function replaceSubstring(str, target, replacement) { 
      return str.split(target).join(replacement);
    }`,
    "output": "replaceSubstring('hello world', 'world', 'JavaScript') // 'hello JavaScript'"
  },
  {
    "question": "Write a function to remove all falsy values from an array.",
    "answer": `function removeFalsy(arr) { 
      return arr.filter(Boolean);
    }`,
    "output": "removeFalsy([0, 1, false, 2, '', 3]) // [1, 2, 3]"
  },
  {
    "question": "Write a function to count how many characters are in a string.",
    "answer": `function countCharacters(str) { 
      return str.length;
    }`,
    "output": "countCharacters('hello') // 5"
  },
  {
    "question": "Write a function to find the second largest number in an array.",
    "answer": `function secondLargest(arr) { 
      const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
      return uniqueArr[1];
    }`,
    "output": "secondLargest([1, 3, 2, 5, 4]) // 4"
  },
  {
    "question": "Write a function to remove all falsy values from an array.",
    "answer": `function removeFalsyValues(arr) { 
      return arr.filter(Boolean);
    }`,
    "output": "removeFalsyValues([0, 1, false, 2, '', 3]) // [1, 2, 3]"
  },
  {
    "question": "Write a function to create a range of numbers.",
    "answer": `function createRange(start, end) { 
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }`,
    "output": "createRange(1, 5) // [1, 2, 3, 4, 5]"
  },
  {
    "question": "Write a function to convert a number to a string.",
    "answer": `function numberToString(num) { 
      return num.toString();
    }`,
    "output": "numberToString(123) // '123'"
  }, {
    "question": "Write a function to reverse a string.",
    "answer": `function reverseString(str) { 
      return str.split('').reverse().join('');
    }`,
    "output": "reverseString('hello') // 'olleh'"
  },
  {
    "question": "Write a function to check if a number is even or odd.",
    "answer": `function isEven(num) { 
      return num % 2 === 0 ? 'Even' : 'Odd';
    }`,
    "output": "isEven(4) // 'Even', isEven(7) // 'Odd'"
  },
  {
    "question": "Write a function to find the factorial of a number.",
    "answer": `function factorial(n) { 
      if (n === 0) return 1; 
      return n * factorial(n - 1); 
    }`,
    "output": "factorial(5) // 120"
  },
  {
    "question": "What is the difference between `var`, `let`, and `const`?",
    "answer": "`var` is function-scoped, `let` and `const` are block-scoped, but `const` is immutable.",
    "output": "Defines variable scoping and mutability."
  },
  {
    "question": "What does `===` mean in JavaScript?",
    "answer": "`===` is the strict equality operator, comparing both value and type.",
    "output": "Checks both value and type equality."
  },
  {
    "question": "How do you declare a function in JavaScript?",
    "answer": "`function myFunc() {}`",
    "output": "Defines a named function."
  },
  {
    "question": "What is a closure?",
    "answer": "A closure is a function that retains access to its lexical scope, even after the function has returned.",
    "output": "Function retains access to its outer scope."
  },
  {
    "question": "What is `null` in JavaScript?",
    "answer": "`null` represents an intentional absence of any object value.",
    "output": "Represents no value or object."
  },
  {
    "question": "What is `undefined`?",
    "answer": "`undefined` means a variable has been declared but has not been assigned a value.",
    "output": "Variable is declared but has no value."
  },
  {
    "question": "How do you create an object in JavaScript?",
    "answer": "`let obj = { key: 'value' };`",
    "output": "Creates an object with key-value pairs."
  },
  {
    "question": "What is the `this` keyword?",
    "answer": "`this` refers to the current execution context, usually the object that owns the method.",
    "output": "Refers to the current execution context."
  },
  {
    "question": "How do you create an array in JavaScript?",
    "answer": "`let arr = [1, 2, 3];`",
    "output": "Creates an array with elements."
  },
  {
    "question": "What is a promise?",
    "answer": "A promise represents the eventual completion or failure of an asynchronous operation.",
    "output": "Represents the outcome of an asynchronous operation."
  },
  {
    "question": "How do you write an arrow function?",
    "answer": "`const add = (a, b) => a + b;`",
    "output": "Defines a concise function using an arrow."
  },
  {
    "question": "What is event delegation?",
    "answer": "Event delegation is the practice of using a single event listener to manage multiple elements.",
    "output": "Single listener manages multiple events."
  },
  {
    "question": "What is `NaN`?",
    "answer": "`NaN` represents 'Not-a-Number', indicating an invalid number result.",
    "output": "Represents an invalid number."
  },
  {
    "question": "What is the `typeof` operator?",
    "answer": "`typeof` returns the type of a variable or expression.",
    "output": "Returns the type of a variable."
  },
  {
    "question": "How do you parse an integer in JavaScript?",
    "answer": "`parseInt('123');`",
    "output": "Converts a string to an integer."
  },
  {
    "question": "What is the `push()` method in arrays?",
    "answer": "`arr.push(item);` adds an item to the end of an array.",
    "output": "Adds an element to the end of an array."
  },
  {
    "question": "What is the `map()` method?",
    "answer": "`arr.map(callback)` creates a new array with the results of calling a provided function on every element.",
    "output": "Creates a new array by transforming the original array."
  },
  {
    "question": "What does `Array.isArray()` do?",
    "answer": "`Array.isArray()` checks if a value is an array.",
    "output": "Checks if the value is an array."
  },
  {
    "question": "What is the difference between `==` and `===`?",
    "answer": "`==` compares values with type coercion, while `===` compares both value and type without coercion.",
    "output": "Checks equality with or without type coercion."
  },
  {
    "question": "How do you handle errors in JavaScript?",
    "answer": "`try { } catch(error) { }`",
    "output": "Catches errors during execution."
  },
  {
    "question": "What is destructuring in JavaScript?",
    "answer": "Destructuring allows unpacking values from arrays or objects into distinct variables.",
    "output": "Extracts values into variables from arrays/objects."
  },
  {
    "question": "What is `localStorage`?",
    "answer": "`localStorage` stores data with no expiration time, available across sessions.",
    "output": "Stores data locally in the browser."
  },
  {
    "question": "What is `sessionStorage`?",
    "answer": "`sessionStorage` stores data for the duration of the page session, only available for the duration of the tab.",
    "output": "Stores data for the current session."
  },
  {
    "question": "What is the `filter()` method?",
    "answer": "`arr.filter(callback)` creates a new array with elements that pass the test implemented by the provided function.",
    "output": "Creates a new array with elements that pass the test."
  },
  {
    "question": "What is an immediately invoked function expression (IIFE)?",
    "answer": "(function() { })();",
    "output": "Executes a function immediately after its definition."
  },
  {
    "question": "What is `bind()` in JavaScript?",
    "answer": "`bind()` creates a new function that, when invoked, has its `this` value set to the provided context.",
    "output": "Creates a new function with a fixed `this` context."
  },
  {
    "question": "How do you convert a string to lowercase?",
    "answer": "`str.toLowerCase();`",
    "output": "Converts a string to lowercase."
  },
  {
    "question": "How do you convert a string to uppercase?",
    "answer": "`str.toUpperCase();`",
    "output": "Converts a string to uppercase."
  },
  {
    "question": "What does `slice()` do in arrays?",
    "answer": "`arr.slice(start, end)` returns a shallow copy of a portion of an array.",
    "output": "Returns a section of an array."
  },
  {
    "question": "What is a callback function?",
    "answer": "A callback function is passed into another function as an argument and is executed after the function completes.",
    "output": "A function passed into another function to be executed later."
  },
  {
    "question": "How do you create a new promise in JavaScript?",
    "answer": "`let promise = new Promise((resolve, reject) => { })`",
    "output": "Creates a new promise for handling asynchronous operations."
  },
  {
    "question": "What is `setTimeout()` used for?",
    "answer": "`setTimeout()` executes a function after a specified delay.",
    "output": "Executes a function after a delay."
  },
  {
    "question": "How do you merge two arrays?",
    "answer": "`let merged = arr1.concat(arr2);`",
    "output": "Combines two arrays into one."
  },
  {
    "question": "What does `Math.random()` return?",
    "answer": "`Math.random()` returns a pseudo-random floating-point number between 0 and 1.",
    "output": "Generates a random number."
  },
  {
    "question": "What is `JSON.stringify()`?",
    "answer": "`JSON.stringify()` converts a JavaScript object to a JSON string.",
    "output": "Converts an object to a JSON string."
  },
  {
    "question": "What is `JSON.parse()`?",
    "answer": "`JSON.parse()` converts a JSON string into a JavaScript object.",
    "output": "Converts a JSON string to an object."
  },
  {
    "question": "What does the `reduce()` method do?",
    "answer": "`arr.reduce(callback)` executes a reducer function on each element to return a single value.",
    "output": "Reduces an array to a single value."
  },
  {
    "question": "What is `Object.assign()`?",
    "answer": "`Object.assign()` copies all enumerable properties from one or more source objects to a target object.",
    "output": "Copies properties from one object to another."
  },
  {
    "question": "What is an event listener?",
    "answer": "`element.addEventListener('event', callback)` attaches an event handler to an element.",
    "output": "Listens for and handles specific events on an element."
  },
  {
    "question": "How do you stop event propagation?",
    "answer": "`event.stopPropagation();`",
    "output": "Prevents the event from bubbling up the DOM."
  },
  {
    "question": "What is the `map()` method?",
    "answer": "`map()` creates a new array populated with the results of calling a provided function on every element.",
    "output": "Transforms elements of an array."
  },
  {
    "question": "What is `async`/`await`?",
    "answer": "`async`/`await` allows asynchronous code to be written in a synchronous style.",
    "output": "Simplifies asynchronous code."
  }
];
