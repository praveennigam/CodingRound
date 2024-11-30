// src/data/javaData.js
export const java = [
  {
    "question": "Write a function to sort an array of integers in ascending order.",
    "answer": `public static void sortArray(int[] arr) { 
      Arrays.sort(arr); 
    }`,
    "output": "sortArray(new int[]{5, 2, 9, 1}) // [1, 2, 5, 9]"
  },
  {
    "question": "Write a function to sort an array of strings by their length.",
    "answer": `public static void sortByLength(String[] arr) { 
      Arrays.sort(arr, Comparator.comparingInt(String::length)); 
    }`,
    "output": "sortByLength(new String[]{\"apple\", \"banana\", \"kiwi\"}) // [kiwi, apple, banana]"
  },
  {
    "question": "Write a program to check if a number is prime.",
    "answer": `public static boolean isPrime(int num) { 
      if (num <= 1) return false; 
      for (int i = 2; i < num; i++) { 
        if (num % i == 0) return false; 
      } 
      return true; 
    }`,
    "output": "isPrime(11) // true, isPrime(4) // false"
  },
  {
    "question": "Write a function to sort an array of integers in ascending order.",
    "answer": "public static void sortArray(int[] arr) { Arrays.sort(arr); }",
    "output": "sortArray(new int[]{5, 2, 9, 1}) // [1, 2, 5, 9]"
  },
  {
    "question": "Write a function to sort an array of strings by their length.",
    "answer": "public static void sortByLength(String[] arr) { Arrays.sort(arr, Comparator.comparingInt(String::length)); }",
    "output": "sortByLength(new String[]{\"apple\", \"banana\", \"kiwi\"}) // [kiwi, apple, banana]"
  },
  {
    "question": "Write a function to perform a bubble sort on an array of integers.",
    "answer": "public static void bubbleSort(int[] arr) { for (int i = 0; i < arr.length; i++) { for (int j = 0; j < arr.length - 1 - i; j++) { if (arr[j] > arr[j + 1]) { int temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp; } } } }",
    "output": "bubbleSort(new int[]{4, 3, 2, 1}) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to perform a selection sort on an array of integers.",
    "answer": "public static void selectionSort(int[] arr) { for (int i = 0; i < arr.length - 1; i++) { int minIndex = i; for (int j = i + 1; j < arr.length; j++) { if (arr[j] < arr[minIndex]) { minIndex = j; } } int temp = arr[minIndex]; arr[minIndex] = arr[i]; arr[i] = temp; } }",
    "output": "selectionSort(new int[]{64, 25, 12, 22, 11}) // [11, 12, 22, 25, 64]"
  },
  {
    "question": "Write a function to perform an insertion sort on an array of integers.",
    "answer": "public static void insertionSort(int[] arr) { for (int i = 1; i < arr.length; i++) { int key = arr[i]; int j = i - 1; while (j >= 0 && arr[j] > key) { arr[j + 1] = arr[j]; j = j - 1; } arr[j + 1] = key; } }",
    "output": "insertionSort(new int[]{12, 11, 13, 5, 6}) // [5, 6, 11, 12, 13]"
  },
  {
    "question": "Write a function to sort an array of integers in descending order.",
    "answer": "public static void sortDescending(int[] arr) { Arrays.sort(arr); for (int i = 0; i < arr.length / 2; i++) { int temp = arr[i]; arr[i] = arr[arr.length - 1 - i]; arr[arr.length - 1 - i] = temp; } }",
    "output": "sortDescending(new int[]{1, 3, 2, 4}) // [4, 3, 2, 1]"
  },
  {
    "question": "Write a function to sort an array of integers using quicksort.",
    "answer": "public static void quickSort(int[] arr, int low, int high) { if (low < high) { int pi = partition(arr, low, high); quickSort(arr, low, pi - 1); quickSort(arr, pi + 1, high); } } private static int partition(int[] arr, int low, int high) { int pivot = arr[high]; int i = (low - 1); for (int j = low; j < high; j++) { if (arr[j] < pivot) { i++; int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp; } } int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp; return i + 1; }",
    "output": "quickSort(new int[]{10, 7, 8, 9, 1, 5}, 0, 5) // [1, 5, 7, 8, 9, 10]"
  },
  {
    "question": "Write a function to sort an array of integers using mergesort.",
    "answer": "public static void mergeSort(int[] arr) { if (arr.length < 2) return; int mid = arr.length / 2; int[] left = Arrays.copyOfRange(arr, 0, mid); int[] right = Arrays.copyOfRange(arr, mid, arr.length); mergeSort(left); mergeSort(right); merge(arr, left, right); } private static void merge(int[] arr, int[] left, int[] right) { int i = 0, j = 0, k = 0; while (i < left.length && j < right.length) { if (left[i] <= right[j]) { arr[k++] = left[i++]; } else { arr[k++] = right[j++]; } } while (i < left.length) { arr[k++] = left[i++]; } while (j < right.length) { arr[k++] = right[j++]; } }",
    "output": "mergeSort(new int[]{38, 27, 43, 3, 9, 82, 10}) // [3, 9, 10, 27, 38, 43, 82]"
  },
  {
    "question": "Write a function to check if an array is sorted in ascending order.",
    "answer": "public static boolean isSorted(int[] arr) { for (int i = 0; i < arr.length - 1; i++) { if (arr[i] > arr[i + 1]) return false; } return true; }",
    "output": "isSorted(new int[]{1, 2, 3, 4, 5}) // true"
  },
  {
    "question": "Write a function to find the kth smallest element in an array.",
    "answer": "public static int kthSmallest(int[] arr, int k) { Arrays.sort(arr); return arr[k - 1]; }",
    "output": "kthSmallest(new int[]{7, 10, 4, 3, 20, 15}, 4) // 10"
  },
  {
    "question": "Write a function to find the kth largest element in an array.",
    "answer": "public static int kthLargest(int[] arr, int k) { Arrays.sort(arr); return arr[arr.length - k]; }",
    "output": "kthLargest(new int[]{12, 3, 5, 7, 19}, 2) // 12"
  },
  {
    "question": "Write a function to merge two sorted arrays.",
    "answer": "public static int[] mergeArrays(int[] arr1, int[] arr2) { int[] merged = new int[arr1.length + arr2.length]; int i = 0, j = 0, k = 0; while (i < arr1.length && j < arr2.length) { if (arr1[i] <= arr2[j]) { merged[k++] = arr1[i++]; } else { merged[k++] = arr2[j++]; } } while (i < arr1.length) { merged[k++] = arr1[i++]; } while (j < arr2.length) { merged[k++] = arr2[j++]; } return merged; }",
    "output": "mergeArrays(new int[]{1, 3, 5}, new int[]{2, 4, 6}) // [1, 2, 3, 4, 5, 6]"
  },
  {
    "question": "Write a function to find the median of an unsorted array.",
    "answer": "public static double findMedian(int[] arr) { Arrays.sort(arr); if (arr.length % 2 == 0) { return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2.0; } else { return arr[arr.length / 2]; } }",
    "output": "findMedian(new int[]{1, 3, 4, 2, 5}) // 3"
  },
  {
    "question": "Write a function to find the mode of an array.",
    "answer": "public static int findMode(int[] arr) { Map<Integer, Integer> map = new HashMap<>(); for (int num : arr) { map.put(num, map.getOrDefault(num, 0) + 1); } return map.entrySet().stream().max(Map.Entry.comparingByValue()).get().getKey(); }",
    "output": "findMode(new int[]{1, 2, 2, 3, 3, 3, 4}) // 3"
  },
  {
    "question": "Write a function to find the intersection of two sets.",
    "answer": "public static Set<Integer> intersection(Set<Integer> set1, Set<Integer> set2) { Set<Integer> result = new HashSet<>(set1); result.retainAll(set2); return result; }",
    "output": "intersection(new HashSet<>(Arrays.asList(1, 2, 3)), new HashSet<>(Arrays.asList(2, 3, 4))) // [2, 3]"
  },
  {
    "question": "Write a function to check if two strings are anagrams.",
    "answer": "public static boolean areAnagrams(String str1, String str2) { if (str1.length() != str2.length()) return false; char[] arr1 = str1.toCharArray(); char[] arr2 = str2.toCharArray(); Arrays.sort(arr1); Arrays.sort(arr2); return Arrays.equals(arr1, arr2); }",
    "output": "areAnagrams(\"listen\", \"silent\") // true"
  },
  {
    "question": "Write a function to check if an array contains a duplicate.",
    "answer": "public static boolean containsDuplicate(int[] arr) { Set<Integer> set = new HashSet<>(); for (int num : arr) { if (!set.add(num)) return true; } return false; }",
    "output": "containsDuplicate(new int[]{1, 2, 3, 4, 5}) // false"
  },
  {
    "question": "Write a function to find the union of two sets.",
    "answer": "public static Set<Integer> union(Set<Integer> set1, Set<Integer> set2) { Set<Integer> result = new HashSet<>(set1); result.addAll(set2); return result; }",
    "output": "union(new HashSet<>(Arrays.asList(1, 2, 3)), new HashSet<>(Arrays.asList(3, 4, 5))) // [1, 2, 3, 4, 5]"
  },
  {
    "question": "Write a function to remove duplicates from an array.",
    "answer": "public static int[] removeDuplicates(int[] arr) { return Arrays.stream(arr).distinct().toArray(); }",
    "output": "removeDuplicates(new int[]{1, 2, 2, 3, 3, 4}) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to reverse an array.",
    "answer": "public static void reverseArray(int[] arr) { int start = 0, end = arr.length - 1; while (start < end) { int temp = arr[start]; arr[start] = arr[end]; arr[end] = temp; start++; end--; } }",
    "output": "reverseArray(new int[]{1, 2, 3, 4, 5}) // [5, 4, 3, 2, 1]"
  },
  {
    "question": "Write a function to check if a string is a palindrome.",
    "answer": "public static boolean isPalindrome(String str) { int start = 0, end = str.length() - 1; while (start < end) { if (str.charAt(start) != str.charAt(end)) return false; start++; end--; } return true; }",
    "output": "isPalindrome(\"racecar\") // true"
  },
  {
    "question": "Write a function to find the longest common substring of two strings.",
    "answer": "public static String longestCommonSubstring(String str1, String str2) { int[][] dp = new int[str1.length() + 1][str2.length() + 1]; int maxLength = 0; int endIdx = 0; for (int i = 1; i <= str1.length(); i++) { for (int j = 1; j <= str2.length(); j++) { if (str1.charAt(i - 1) == str2.charAt(j - 1)) { dp[i][j] = dp[i - 1][j - 1] + 1; if (dp[i][j] > maxLength) { maxLength = dp[i][j]; endIdx = i; } } } } return str1.substring(endIdx - maxLength, endIdx); }",
    "output": "longestCommonSubstring(\"abcxyz\", \"xyzabc\") // \"xyz\""
  },
  {
    "question": "Write a function to calculate the area of a circle.",
    "answer": "public static double areaOfCircle(double radius) { return Math.PI * radius * radius; }",
    "output": "areaOfCircle(5) // 78.53981633974483"
  },
  {
    "question": "Write a function to check if a number is even.",
    "answer": "public static boolean isEven(int n) { return n % 2 == 0; }",
    "output": "isEven(4) // true"
  },
  {
    "question": "Write a function to check if a number is odd.",
    "answer": "public static boolean isOdd(int n) { return n % 2 != 0; }",
    "output": "isOdd(5) // true"
  },
  {
    "question": "Write a function to find the largest palindrome in a string.",
    "answer": "public static String largestPalindrome(String s) { String largest = \"\"; for (int i = 0; i < s.length(); i++) { for (int j = i + 1; j <= s.length(); j++) { String sub = s.substring(i, j); if (isPalindrome(sub) && sub.length() > largest.length()) { largest = sub; } } } return largest; } private static boolean isPalindrome(String s) { String reversed = new StringBuilder(s).reverse().toString(); return s.equals(reversed); }",
    "output": "largestPalindrome(\"babad\") // \"bab\""
  },
  {
    "question": "Write a function to convert a string to lowercase.",
    "answer": "public static String toLowerCase(String s) { return s.toLowerCase(); }",
    "output": "toLowerCase(\"Hello\") // \"hello\""
  },
  {
    "question": "Write a function to convert a string to uppercase.",
    "answer": "public static String toUpperCase(String s) { return s.toUpperCase(); }",
    "output": "toUpperCase(\"hello\") // \"HELLO\""
  },
  {
    "question": "Write a function to reverse an integer.",
    "answer": "public static int reverseInt(int n) { int reversed = 0; while (n != 0) { reversed = reversed * 10 + n % 10; n /= 10; } return reversed; }",
    "output": "reverseInt(123) // 321"
  },
  {
    "question": "Write a function to check if a string contains only digits.",
    "answer": "public static boolean isNumeric(String s) { return s.matches(\"\\d+\"); }",
    "output": "isNumeric(\"12345\") // true"
  },
  {
    "question": "Write a function to find the common elements in two arrays.",
    "answer": "public static int[] commonElements(int[] arr1, int[] arr2) { return Arrays.stream(arr1).filter(x -> Arrays.stream(arr2).anyMatch(y -> y == x)).toArray(); }",
    "output": "commonElements(new int[]{1, 2, 3}, new int[]{2, 3, 4}) // [2, 3]"
  },
  {
    "question": "Write a function to find the missing number in an array of 1 to n.",
    "answer": "public static int findMissingNumber(int[] arr, int n) { int expectedSum = n * (n + 1) / 2; int actualSum = 0; for (int num : arr) { actualSum += num; } return expectedSum - actualSum; }",
    "output": "findMissingNumber(new int[]{1, 2, 4, 5}, 5) // 3"
  },
  {
    "question": "Write a function to check if two strings are anagrams.",
    "answer": "public static boolean areAnagrams(String s1, String s2) { char[] str1 = s1.toCharArray(); char[] str2 = s2.toCharArray(); Arrays.sort(str1); Arrays.sort(str2); return Arrays.equals(str1, str2); }",
    "output": "areAnagrams(\"listen\", \"silent\") // true"
  },
  {
    "question": "Write a function to generate all permutations of a string.",
    "answer": "public static void permute(String str) { permuteHelper(str, \"\"); } private static void permuteHelper(String str, String prefix) { if (str.length() == 0) { System.out.println(prefix); } else { for (int i = 0; i < str.length(); i++) { permuteHelper(str.substring(0, i) + str.substring(i + 1), prefix + str.charAt(i)); } } }",
    "output": "permute(\"abc\") // abc, acb, bac, bca, cab, cba"
  },
  {
    "question": "Write a function to print the Fibonacci series up to n terms using iteration.",
    "answer": "public static void fibonacciIterative(int n) { int a = 0, b = 1; for (int i = 0; i < n; i++) { System.out.print(a + \" \"); int temp = a; a = b; b = temp + b; } }",
    "output": "fibonacciIterative(5) // 0 1 1 2 3"
  },
  {
    "question": "Write a function to print the Fibonacci series up to n terms using recursion.",
    "answer": "public static void fibonacciRecursive(int n, int a, int b) { if (n == 0) return; System.out.print(a + \" \"); fibonacciRecursive(n - 1, b, a + b); }",
    "output": "fibonacciRecursive(5, 0, 1) // 0 1 1 2 3"
  },
  {
    "question": "Write a function to find the longest common prefix of an array of strings.",
    "answer": "public static String longestCommonPrefix(String[] strs) { if (strs == null || strs.length == 0) return \"\"; String prefix = strs[0]; for (int i = 1; i < strs.length; i++) { while (strs[i].indexOf(prefix) != 0) { prefix = prefix.substring(0, prefix.length() - 1); } } return prefix; }",
    "output": "longestCommonPrefix(new String[]{\"flower\", \"flow\", \"flight\"}) // \"fl\""
  },
  {
    "question": "Write a function to find if a number is a power of two.",
    "answer": "public static boolean isPowerOfTwo(int n) { return n > 0 && (n & (n - 1)) == 0; }",
    "output": "isPowerOfTwo(16) // true"
  },
  {
    "question": "Write a function to count the number of words in a string.",
    "answer": "public static int countWords(String s) { String[] words = s.split(\"\\s+\"); return words.length; }",
    "output": "countWords(\"Hello World\") // 2"
  },
  {
    "question": "Write a function to find the intersection of two arrays.",
    "answer": "public static int[] intersection(int[] arr1, int[] arr2) { return Arrays.stream(arr1).filter(x -> Arrays.stream(arr2).anyMatch(y -> y == x)).toArray(); }",
    "output": "intersection(new int[]{1, 2, 3}, new int[]{2, 3, 4}) // [2, 3]"
  },
  {
    "question": "Write a function to find the sum of even numbers in an array.",
    "answer": "public static int sumOfEven(int[] arr) { return Arrays.stream(arr).filter(x -> x % 2 == 0).sum(); }",
    "output": "sumOfEven(new int[]{1, 2, 3, 4}) // 6"
  },
  {
    "question": "Write a function to find the sum of odd numbers in an array.",
    "answer": "public static int sumOfOdd(int[] arr) { return Arrays.stream(arr).filter(x -> x % 2 != 0).sum(); }",
    "output": "sumOfOdd(new int[]{1, 2, 3, 4}) // 4"
  },
  {
    "question": "Write a function to remove all whitespaces from a string.",
    "answer": "public static String removeWhitespaces(String s) { return s.replaceAll(\"\\s+\", \"\"); }",
    "output": "removeWhitespaces(\"Hello World\") // \"HelloWorld\""
  },
  {
    "question": "Write a function to calculate the sum of the digits of a number.",
    "answer": "public static int sumOfDigits(int n) { int sum = 0; while (n > 0) { sum += n % 10; n /= 10; } return sum; }",
    "output": "sumOfDigits(123) // 6"
  },
  {
    "question": "Write a function to find the first non-repeating character in a string.",
    "answer": "public static char firstNonRepeatingCharacter(String s) { Map<Character, Integer> map = new HashMap<>(); for (char c : s.toCharArray()) { map.put(c, map.getOrDefault(c, 0) + 1); } for (char c : s.toCharArray()) { if (map.get(c) == 1) { return c; } } return '\\0'; }",
    "output": "firstNonRepeatingCharacter(\"swiss\") // 'w'"
  },
  {
    "question": "Write a function to check if a string is a palindrome.",
    "answer": "public static boolean isPalindrome(String s) { int left = 0, right = s.length() - 1; while (left < right) { if (s.charAt(left) != s.charAt(right)) return false; left++; right--; } return true; }",
    "output": "isPalindrome(\"madam\") // true"
  },
  {
    "question": "Write a function to reverse a string.",
    "answer": "public static String reverseString(String s) { return new StringBuilder(s).reverse().toString(); }",
    "output": "reverseString(\"hello\") // \"olleh\""
  },
  {
    "question": "Write a function to find the largest number in an array.",
    "answer": "public static int findLargest(int[] arr) { int max = arr[0]; for (int num : arr) { max = Math.max(max, num); } return max; }",
    "output": "findLargest(new int[]{1, 3, 5, 2}) // 5"
  },
  {
    "question": "Write a function to count the number of vowels in a string.",
    "answer": "public static int countVowels(String s) { int count = 0; for (char c : s.toCharArray()) { if (\"aeiouAEIOU\".indexOf(c) != -1) count++; } return count; }",
    "output": "countVowels(\"hello\") // 2"
  },
  {
    "question": "Write a function to find the factorial of a number.",
    "answer": "public static int factorial(int n) { if (n == 0) return 1; return n * factorial(n - 1); }",
    "output": "factorial(5) // 120"
  },
  {
    "question": "Write a function to check if a number is prime.",
    "answer": "public static boolean isPrime(int n) { if (n <= 1) return false; for (int i = 2; i * i <= n; i++) { if (n % i == 0) return false; } return true; }",
    "output": "isPrime(7) // true"
  },
  {
    "question": "Write a function to merge two sorted arrays.",
    "answer": "public static int[] mergeSortedArrays(int[] arr1, int[] arr2) { int[] result = new int[arr1.length + arr2.length]; int i = 0, j = 0, k = 0; while (i < arr1.length && j < arr2.length) { result[k++] = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]; } while (i < arr1.length) result[k++] = arr1[i++]; while (j < arr2.length) result[k++] = arr2[j++]; return result; }",
    "output": "mergeSortedArrays(new int[]{1, 3, 5}, new int[]{2, 4, 6}) // [1, 2, 3, 4, 5, 6]"
  },
  {
    "question": "Write a function to remove duplicates from an array.",
    "answer": "public static int[] removeDuplicates(int[] arr) { return Arrays.stream(arr).distinct().toArray(); }",
    "output": "removeDuplicates(new int[]{1, 2, 2, 3}) // [1, 2, 3]"
  },
  {
    "question": "Write a function to find the length of a string without using built-in methods.",
    "answer": "public static int stringLength(String s) { int length = 0; for (char c : s.toCharArray()) { length++; } return length; }",
    "output": "stringLength(\"hello\") // 5"
  },
  {
    "question": "Write a function to find the second largest element in an array.",
    "answer": "public static int secondLargest(int[] arr) { int largest = Integer.MIN_VALUE, secondLargest = Integer.MIN_VALUE; for (int num : arr) { if (num > largest) { secondLargest = largest; largest = num; } else if (num > secondLargest && num != largest) { secondLargest = num; } } return secondLargest; }",
    "output": "secondLargest(new int[]{1, 2, 3, 4}) // 3"
  },
  {
    "question": "Write a function to generate Fibonacci series up to n.",
    "answer": "public static void fibonacci(int n) { int a = 0, b = 1; for (int i = 0; i < n; i++) { System.out.print(a + \" \"); int temp = a; a = b; b = temp + b; } }",
    "output": "fibonacci(5) // 0 1 1 2 3"
  },
  {
    "question": "Write a function to check if two strings are anagrams.",
    "answer": "public static boolean areAnagrams(String s1, String s2) { char[] arr1 = s1.toCharArray(); char[] arr2 = s2.toCharArray(); Arrays.sort(arr1); Arrays.sort(arr2); return Arrays.equals(arr1, arr2); }",
    "output": "areAnagrams(\"listen\", \"silent\") // true"
  },
  {
    "question": "Write a function to check if a number is even or odd.",
    "answer": "public static String evenOrOdd(int n) { return n % 2 == 0 ? \"Even\" : \"Odd\"; }",
    "output": "evenOrOdd(4) // Even"
  },
  {
    "question": "Write a function to find the intersection of two arrays.",
    "answer": "public static int[] intersection(int[] arr1, int[] arr2) { Set<Integer> set = new HashSet<>(); for (int num : arr1) set.add(num); List<Integer> result = new ArrayList<>(); for (int num : arr2) if (set.contains(num)) result.add(num); return result.stream().mapToInt(i -> i).toArray(); }",
    "output": "intersection(new int[]{1, 2, 3}, new int[]{2, 3, 4}) // [2, 3]"
  },
  {
    "question": "Write a function to check if a string contains only digits.",
    "answer": "public static boolean isDigitsOnly(String s) { return s.matches(\"\\d+\"); }",
    "output": "isDigitsOnly(\"12345\") // true"
  },
  {
    "question": "Write a function to calculate the power of a number.",
    "answer": "public static int power(int base, int exp) { return (int) Math.pow(base, exp); }",
    "output": "power(2, 3) // 8"
  },
  {
    "question": "Write a function to find the common elements in two lists.",
    "answer": "public static List<Integer> commonElements(List<Integer> list1, List<Integer> list2) { list1.retainAll(list2); return list1; }",
    "output": "commonElements(Arrays.asList(1, 2, 3), Arrays.asList(2, 3, 4)) // [2, 3]"
  },
  {
    "question": "Write a function to find the largest palindrome in a string.",
    "answer": "public static String largestPalindrome(String s) { String largest = \"\"; for (int i = 0; i < s.length(); i++) { for (int j = i + 1; j <= s.length(); j++) { String substring = s.substring(i, j); if (isPalindrome(substring) && substring.length() > largest.length()) { largest = substring; } } } return largest; }",
    "output": "largestPalindrome(\"racecar\") // \"racecar\""
  },
  {
    "question": "Write a function to convert a string to lowercase.",
    "answer": "public static String toLowerCase(String s) { return s.toLowerCase(); }",
    "output": "toLowerCase(\"HELLO\") // \"hello\""
  },
  {
    "question": "Write a function to calculate the sum of squares of numbers from 1 to n.",
    "answer": "public static int sumOfSquares(int n) { int sum = 0; for (int i = 1; i <= n; i++) { sum += i * i; } return sum; }",
    "output": "sumOfSquares(3) // 14"
  },
  {
    "question": "Write a function to find the duplicate elements in an array.",
    "answer": "public static List<Integer> findDuplicates(int[] arr) { Set<Integer> set = new HashSet<>(); List<Integer> duplicates = new ArrayList<>(); for (int num : arr) { if (!set.add(num)) duplicates.add(num); } return duplicates; }",
    "output": "findDuplicates(new int[]{1, 2, 2, 3, 3}) // [2, 3]"
  },
  {
    "question": "Write a function to check if a string is a substring of another string.",
    "answer": "public static boolean isSubstring(String s1, String s2) { return s1.contains(s2); }",
    "output": "isSubstring(\"hello\", \"ell\") // true"
  },
  {
    "question": "Write a function to find the maximum sum of a subarray of size k.",
    "answer": "public static int maxSumSubarray(int[] arr, int k) { int maxSum = 0, windowSum = 0; for (int i = 0; i < k; i++) windowSum += arr[i]; maxSum = windowSum; for (int i = k; i < arr.length; i++) { windowSum += arr[i] - arr[i - k]; maxSum = Math.max(maxSum, windowSum); } return maxSum; }",
    "output": "maxSumSubarray(new int[]{2, 1, 5, 1, 3, 2}, 3) // 9"
  },
  {
    "question": "Write a function to calculate the sum of the digits of a number.",
    "answer": "public class Solution { public static int sumOfDigits(int n) { int sum = 0; while (n > 0) { sum += n % 10; n /= 10; } return sum; } public static void main(String[] args) { System.out.println(sumOfDigits(123)); // 6 } }",
    "output": "sumOfDigits(123) // 6"
  },
  {
    "question": "Write a function to find the first non-repeating character in a string.",
    "answer": "public class Solution { public static char firstNonRepeatingChar(String str) { Map<Character, Integer> map = new HashMap<>(); for (char c : str.toCharArray()) { map.put(c, map.getOrDefault(c, 0) + 1); } for (char c : str.toCharArray()) { if (map.get(c) == 1) return c; } return '-'; } public static void main(String[] args) { System.out.println(firstNonRepeatingChar(\"swiss\")); // w } }",
    "output": "firstNonRepeatingChar(\"swiss\") // w"
  },
  {
    "question": "Write a function to find the second largest element in an array.",
    "answer": "public class Solution { public static int secondLargest(int[] arr) { int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE; for (int num : arr) { if (num > first) { second = first; first = num; } else if (num > second && num != first) { second = num; } } return second; } public static void main(String[] args) { System.out.println(secondLargest(new int[]{12, 35, 1, 10, 34, 1})); // 34 } }",
    "output": "secondLargest(new int[]{12, 35, 1, 10, 34, 1}) // 34"
  },
  {
    "question": "Write a function to merge two sorted arrays into a single sorted array.",
    "answer": "public class Solution { public static int[] mergeSortedArrays(int[] arr1, int[] arr2) { int[] result = new int[arr1.length + arr2.length]; int i = 0, j = 0, k = 0; while (i < arr1.length && j < arr2.length) { if (arr1[i] < arr2[j]) { result[k++] = arr1[i++]; } else { result[k++] = arr2[j++]; } } while (i < arr1.length) { result[k++] = arr1[i++]; } while (j < arr2.length) { result[k++] = arr2[j++]; } return result; } public static void main(String[] args) { System.out.println(Arrays.toString(mergeSortedArrays(new int[]{1, 3, 5}, new int[]{2, 4, 6}))); // [1, 2, 3, 4, 5, 6] } }",
    "output": "mergeSortedArrays(new int[]{1, 3, 5}, new int[]{2, 4, 6}) // [1, 2, 3, 4, 5, 6]"
  },
  {
    "question": "Write a function to check if a string is a palindrome without using built-in methods.",
    "answer": "public class Solution { public static boolean isPalindrome(String str) { int left = 0, right = str.length() - 1; while (left < right) { if (str.charAt(left) != str.charAt(right)) return false; left++; right--; } return true; } public static void main(String[] args) { System.out.println(isPalindrome(\"racecar\")); // true System.out.println(isPalindrome(\"hello\")); // false } }",
    "output": "isPalindrome(\"racecar\") // true"
  },
  {
    "question": "Write a function to count the number of words in a sentence.",
    "answer": "public class Solution { public static int countWords(String str) { String[] words = str.split(\"\\s+\"); return words.length; } public static void main(String[] args) { System.out.println(countWords(\"This is a test.\")); // 4 } }",
    "output": "countWords(\"This is a test.\") // 4"
  },
  {
    "question": "Write a function to swap two numbers without using a temporary variable.",
    "answer": "public class Solution { public static void swap(int a, int b) { a = a + b; b = a - b; a = a - b; System.out.println(\"a: \" + a + \", b: \" + b); } public static void main(String[] args) { swap(5, 10); } }",
    "output": "swap(5, 10) // a: 10, b: 5"
  },
  {
    "question": "Write a function to check if a number is prime.",
    "answer": "public class Solution { public static boolean isPrime(int n) { if (n <= 1) return false; for (int i = 2; i <= Math.sqrt(n); i++) { if (n % i == 0) return false; } return true; } public static void main(String[] args) { System.out.println(isPrime(5)); // true System.out.println(isPrime(10)); // false } }",
    "output": "isPrime(5) // true"
  },
  {
    "question": "Write a function to find the largest prime factor of a number.",
    "answer": "public class Solution { public static int largestPrimeFactor(int n) { int largest = -1; for (int i = 2; i <= Math.sqrt(n); i++) { while (n % i == 0) { largest = i; n /= i; } } if (n > 1) largest = n; return largest; } public static void main(String[] args) { System.out.println(largestPrimeFactor(56)); // 7 } }",
    "output": "largestPrimeFactor(56) // 7"
  },
  {
    "question": "Write a function to find the sum of elements at even indices in an array.",
    "answer": "public class Solution { public static int sumEvenIndices(int[] arr) { int sum = 0; for (int i = 0; i < arr.length; i += 2) { sum += arr[i]; } return sum; } public static void main(String[] args) { System.out.println(sumEvenIndices(new int[]{1, 2, 3, 4, 5})); // 9 } }",
    "output": "sumEvenIndices(new int[]{1, 2, 3, 4, 5}) // 9"
  },
  {
    "question": "Write a function to find the largest number in an array.",
    "answer": "public class Solution { public static int largestNumber(int[] arr) { int largest = Integer.MIN_VALUE; for (int num : arr) { if (num > largest) largest = num; } return largest; } public static void main(String[] args) { System.out.println(largestNumber(new int[]{1, 2, 3, 4, 5})); // 5 } }",
    "output": "largestNumber(new int[]{1, 2, 3, 4, 5}) // 5"
  },
  {
    "question": "Write a function to find the first repeating character in a string.",
    "answer": "public class Solution { public static char firstRepeatingChar(String str) { Set<Character> seen = new HashSet<>(); for (char c : str.toCharArray()) { if (!seen.add(c)) return c; } return '-'; } public static void main(String[] args) { System.out.println(firstRepeatingChar(\"hello\")); // l } }",
    "output": "firstRepeatingChar(\"hello\") // l"
  },
  {
    "question": "Write a function to check if a string contains all digits.",
    "answer": "public class Solution { public static boolean containsDigits(String str) { return str.matches(\".*\\d.*\"); } public static void main(String[] args) { System.out.println(containsDigits(\"abc123\")); // true System.out.println(containsDigits(\"hello\")); // false } }",
    "output": "containsDigits(\"abc123\") // true"
  },
  {
    "question": "Write a function to calculate the sum of squares of numbers in an array.",
    "answer": "public class Solution { public static int sumOfSquares(int[] arr) { int sum = 0; for (int num : arr) { sum += num * num; } return sum; } public static void main(String[] args) { System.out.println(sumOfSquares(new int[]{1, 2, 3})); // 14 } }",
    "output": "sumOfSquares(new int[]{1, 2, 3}) // 14"
  },
  {
    "question": "Write a function to check if a number is a perfect square.",
    "answer": "public class Solution { public static boolean isPerfectSquare(int n) { int sqrt = (int)Math.sqrt(n); return sqrt * sqrt == n; } public static void main(String[] args) { System.out.println(isPerfectSquare(16)); // true System.out.println(isPerfectSquare(18)); // false } }",
    "output": "isPerfectSquare(16) // true"
  },
  {
    "question": "Write a function to convert a binary number to decimal.",
    "answer": "public class Solution { public static int binaryToDecimal(String binary) { return Integer.parseInt(binary, 2); } public static void main(String[] args) { System.out.println(binaryToDecimal(\"1010\")); // 10 } }",
    "output": "binaryToDecimal(\"1010\") // 10"
  },
  {
    "question": "Write a function to reverse an integer.",
    "answer": "public class Solution { public static int reverseInteger(int n) { int reversed = 0; while (n != 0) { reversed = reversed * 10 + n % 10; n /= 10; } return reversed; } public static void main(String[] args) { System.out.println(reverseInteger(123)); // 321 } }",
    "output": "reverseInteger(123) // 321"
  },
  {
    "question": "Write a function to check if two strings are anagrams of each other.",
    "answer": "public class Solution { public static boolean areAnagrams(String str1, String str2) { if (str1.length() != str2.length()) return false; char[] arr1 = str1.toCharArray(); char[] arr2 = str2.toCharArray(); Arrays.sort(arr1); Arrays.sort(arr2); return Arrays.equals(arr1, arr2); } public static void main(String[] args) { System.out.println(areAnagrams(\"listen\", \"silent\")); // true } }",
    "output": "areAnagrams(\"listen\", \"silent\") // true"
  },
  {
    "question": "Write a function to check if a string is a valid palindrome after removing non-alphanumeric characters.",
    "answer": "public class Solution { public static boolean isValidPalindrome(String str) { str = str.replaceAll(\"[^a-zA-Z0-9]\", \"\").toLowerCase(); int left = 0, right = str.length() - 1; while (left < right) { if (str.charAt(left) != str.charAt(right)) return false; left++; right--; } return true; } public static void main(String[] args) { System.out.println(isValidPalindrome(\"A man, a plan, a canal, Panama\")); // true } }",
    "output": "isValidPalindrome(\"A man, a plan, a canal, Panama\") // true"
  },
  {
    "question": "Write a function to remove duplicates from an array.",
    "answer": "public class Solution { public static int[] removeDuplicates(int[] arr) { Set<Integer> set = new HashSet<>(); for (int num : arr) { set.add(num); } int[] result = new int[set.size()]; int i = 0; for (int num : set) { result[i++] = num; } return result; } public static void main(String[] args) { System.out.println(Arrays.toString(removeDuplicates(new int[]{1, 2, 2, 3, 4}))); // [1, 2, 3, 4] } }",
    "output": "removeDuplicates(new int[]{1, 2, 2, 3, 4}) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to check if a string is a valid number.",
    "answer": "public class Solution { public static boolean isValidNumber(String str) { try { Double.parseDouble(str); return true; } catch (NumberFormatException e) { return false; } } public static void main(String[] args) { System.out.println(isValidNumber(\"123.45\")); // true System.out.println(isValidNumber(\"abc\")); // false } }",
    "output": "isValidNumber(\"123.45\") // true"
  },
  {
    "question": "Write a function to remove all non-alphabetic characters from a string.",
    "answer": "public class Solution { public static String removeNonAlphabetic(String str) { return str.replaceAll(\"[^a-zA-Z]\", \"\"); } public static void main(String[] args) { System.out.println(removeNonAlphabetic(\"abc123!@#\")); // abc } }",
    "output": "removeNonAlphabetic(\"abc123!@#\") // abc"
  }
  ,
  {
    "question": "Write a function to check if a string is an anagram of another string.",
    "answer": "public class Solution { public static boolean areAnagrams(String str1, String str2) { if (str1.length() != str2.length()) return false; char[] arr1 = str1.toCharArray(); char[] arr2 = str2.toCharArray(); Arrays.sort(arr1); Arrays.sort(arr2); return Arrays.equals(arr1, arr2); } public static void main(String[] args) { System.out.println(areAnagrams(\"listen\", \"silent\")); // true } }",
    "output": "areAnagrams(\"listen\", \"silent\") // true"
  },
  {
    "question": "Write a function to find the largest palindrome in an array of strings.",
    "answer": "public class Solution { public static String largestPalindrome(String[] arr) { String largest = \"\"; for (String str : arr) { if (isPalindrome(str) && str.length() > largest.length()) { largest = str; } } return largest; } public static boolean isPalindrome(String str) { int left = 0, right = str.length() - 1; while (left < right) { if (str.charAt(left) != str.charAt(right)) return false; left++; right--; } return true; } public static void main(String[] args) { System.out.println(largestPalindrome(new String[]{\"madam\", \"level\", \"hello\"})); // madam } }",
    "output": "largestPalindrome(new String[]{\"madam\", \"level\", \"hello\"}) // madam"
  },
  {
    "question": "Write a function to find the common characters in two strings.",
    "answer": "public class Solution { public static String commonCharacters(String str1, String str2) { StringBuilder result = new StringBuilder(); for (char c : str1.toCharArray()) { if (str2.indexOf(c) != -1) { result.append(c); str2 = str2.replaceFirst(String.valueOf(c), \"\"); } } return result.toString(); } public static void main(String[] args) { System.out.println(commonCharacters(\"abcdef\", \"bcdfgh\")); // bcd } }",
    "output": "commonCharacters(\"abcdef\", \"bcdfgh\") // bcd"
  },
  {
    "question": "Write a function to check if a number is a perfect number.",
    "answer": "public class Solution { public static boolean isPerfectNumber(int n) { int sum = 0; for (int i = 1; i <= n / 2; i++) { if (n % i == 0) sum += i; } return sum == n; } public static void main(String[] args) { System.out.println(isPerfectNumber(6)); // true System.out.println(isPerfectNumber(28)); // true System.out.println(isPerfectNumber(12)); // false } }",
    "output": "isPerfectNumber(6) // true"
  },
  {
    "question": "Write a function to find the sum of all prime numbers up to N.",
    "answer": "public class Solution { public static int sumOfPrimes(int n) { int sum = 0; for (int i = 2; i <= n; i++) { if (isPrime(i)) sum += i; } return sum; } public static boolean isPrime(int n) { for (int i = 2; i <= Math.sqrt(n); i++) { if (n % i == 0) return false; } return true; } public static void main(String[] args) { System.out.println(sumOfPrimes(10)); // 17 } }",
    "output": "sumOfPrimes(10) // 17"
  },
  {
    "question": "Write a function to remove all occurrences of a given character from a string.",
    "answer": "public class Solution { public static String removeChar(String str, char ch) { return str.replaceAll(String.valueOf(ch), \"\"); } public static void main(String[] args) { System.out.println(removeChar(\"hello world\", 'o')); // hell wrld } }",
    "output": "removeChar(\"hello world\", 'o') // hell wrld"
  },
  {
    "question": "Write a function to check if a number is a power of 2.",
    "answer": "public class Solution { public static boolean isPowerOfTwo(int n) { return (n > 0) && (n & (n - 1)) == 0; } public static void main(String[] args) { System.out.println(isPowerOfTwo(16)); // true System.out.println(isPowerOfTwo(18)); // false } }",
    "output": "isPowerOfTwo(16) // true"
  },
  {
    "question": "Write a function to count the number of set bits in a number.",
    "answer": "public class Solution { public static int countSetBits(int n) { int count = 0; while (n > 0) { count += n & 1; n >>= 1; } return count; } public static void main(String[] args) { System.out.println(countSetBits(7)); // 3 } }",
    "output": "countSetBits(7) // 3"
  },
  {
    "question": "Write a function to calculate the LCM of two numbers.",
    "answer": "public class Solution { public static int lcm(int a, int b) { return (a * b) / gcd(a, b); } public static int gcd(int a, int b) { if (b == 0) return a; return gcd(b, a % b); } public static void main(String[] args) { System.out.println(lcm(12, 15)); // 60 } }",
    "output": "lcm(12, 15) // 60"
  },
  {
    "question": "Write a function to reverse a string without using built-in functions.",
    "answer": "public class Solution { public static String reverseString(String str) { StringBuilder reversed = new StringBuilder(); for (int i = str.length() - 1; i >= 0; i--) { reversed.append(str.charAt(i)); } return reversed.toString(); } public static void main(String[] args) { System.out.println(reverseString(\"hello\")); // olleh } }",
    "output": "reverseString(\"hello\") // olleh"
  },
  {
    "question": "Write a function to find the intersection of two arrays.",
    "answer": "public class Solution { public static int[] intersection(int[] arr1, int[] arr2) { Set<Integer> set = new HashSet<>(); List<Integer> result = new ArrayList<>(); for (int num : arr1) { set.add(num); } for (int num : arr2) { if (set.contains(num)) result.add(num); } return result.stream().mapToInt(i -> i).toArray(); } public static void main(String[] args) { System.out.println(Arrays.toString(intersection(new int[]{1, 2, 3}, new int[]{2, 3, 4}))); // [2, 3] } }",
    "output": "intersection(new int[]{1, 2, 3}, new int[]{2, 3, 4}) // [2, 3]"
  },
  {
    "question": "Write a function to count the occurrences of a character in a string.",
    "answer": "public class Solution { public static int countOccurrences(String str, char ch) { int count = 0; for (int i = 0; i < str.length(); i++) { if (str.charAt(i) == ch) count++; } return count; } public static void main(String[] args) { System.out.println(countOccurrences(\"hello world\", 'o')); // 2 } }",
    "output": "countOccurrences(\"hello world\", 'o') // 2"
  },
  {
    "question": "Write a function to check if a string contains only digits.",
    "answer": "public class Solution { public static boolean isDigitsOnly(String str) { return str.matches(\"\\d+\"); } public static void main(String[] args) { System.out.println(isDigitsOnly(\"12345\")); // true System.out.println(isDigitsOnly(\"abc123\")); // false } }",
    "output": "isDigitsOnly(\"12345\") // true"
  },
  {
    "question": "Write a function to check if a number is an Armstrong number.",
    "answer": "public class Solution { public static boolean isArmstrong(int n) { int sum = 0, temp = n, digits = String.valueOf(n).length(); while (temp != 0) { sum += Math.pow(temp % 10, digits); temp /= 10; } return sum == n; } public static void main(String[] args) { System.out.println(isArmstrong(153)); // true System.out.println(isArmstrong(123)); // false } }",
    "output": "isArmstrong(153) // true"
  },
  {
    "question": "Write a function to find the unique elements in an array.",
    "answer": "public class Solution { public static int[] uniqueElements(int[] arr) { Set<Integer> set = new HashSet<>(); for (int num : arr) { set.add(num); } return set.stream().mapToInt(i -> i).toArray(); } public static void main(String[] args) { System.out.println(Arrays.toString(uniqueElements(new int[]{1, 2, 2, 3, 4}))); // [1, 2, 3, 4] } }",
    "output": "uniqueElements(new int[]{1, 2, 2, 3, 4}) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to convert a string to lowercase.",
    "answer": "public class Solution { public static String toLowerCase(String str) { return str.toLowerCase(); } public static void main(String[] args) { System.out.println(toLowerCase(\"HELLO\")); // hello } }",
    "output": "toLowerCase(\"HELLO\") // hello"
  },
  {
    "question": "Write a function to calculate the factorial of a number.",
    "answer": "public class Solution { public static int factorial(int n) { int result = 1; for (int i = 2; i <= n; i++) { result *= i; } return result; } public static void main(String[] args) { System.out.println(factorial(5)); // 120 } }",
    "output": "factorial(5) // 120"
  },
  {
    "question": "Write a function to count the number of vowels in a string.",
    "answer": "public class Solution { public static int countVowels(String str) { int count = 0; for (int i = 0; i < str.length(); i++) { char c = str.charAt(i); if (\"aeiouAEIOU\".indexOf(c) != -1) count++; } return count; } public static void main(String[] args) { System.out.println(countVowels(\"hello\")); // 2 } }",
    "output": "countVowels(\"hello\") // 2"
  }
  ,
  {
    "question": "Write a function to find the second largest element in an array.",
    "answer": "public class Solution { public static int secondLargest(int[] arr) { int largest = Integer.MIN_VALUE, secondLargest = Integer.MIN_VALUE; for (int num : arr) { if (num > largest) { secondLargest = largest; largest = num; } else if (num > secondLargest && num != largest) { secondLargest = num; } } return secondLargest; } public static void main(String[] args) { System.out.println(secondLargest(new int[]{1, 2, 3, 4})); // 3 } }",
    "output": "secondLargest(new int[]{1, 2, 3, 4}) // 3"
  },
  {
    "question": "Write a function to check if a string is a palindrome.",
    "answer": "public class Solution { public static boolean isPalindrome(String str) { int left = 0, right = str.length() - 1; while (left < right) { if (str.charAt(left) != str.charAt(right)) return false; left++; right--; } return true; } public static void main(String[] args) { System.out.println(isPalindrome(\"racecar\")); // true System.out.println(isPalindrome(\"hello\")); // false } }",
    "output": "isPalindrome(\"racecar\") // true"
  },
  {
    "question": "Write a function to reverse an array.",
    "answer": "public class Solution { public static void reverseArray(int[] arr) { int start = 0, end = arr.length - 1; while (start < end) { int temp = arr[start]; arr[start] = arr[end]; arr[end] = temp; start++; end--; } } public static void main(String[] args) { int[] arr = {1, 2, 3, 4}; reverseArray(arr); System.out.println(Arrays.toString(arr)); // [4, 3, 2, 1] } }",
    "output": "reverseArray(new int[]{1, 2, 3, 4}) // [4, 3, 2, 1]"
  },
  {
    "question": "Write a function to find the sum of digits of a number.",
    "answer": "public class Solution { public static int sumOfDigits(int n) { int sum = 0; while (n != 0) { sum += n % 10; n /= 10; } return sum; } public static void main(String[] args) { System.out.println(sumOfDigits(1234)); // 10 } }",
    "output": "sumOfDigits(1234) // 10"
  },
  {
    "question": "Write a function to convert a string to an integer.",
    "answer": "public class Solution { public static int stringToInt(String str) { return Integer.parseInt(str); } public static void main(String[] args) { System.out.println(stringToInt(\"1234\")); // 1234 } }",
    "output": "stringToInt(\"1234\") // 1234"
  },
  {
    "question": "Write a function to remove duplicates from an array.",
    "answer": "public class Solution { public static int[] removeDuplicates(int[] arr) { Set<Integer> set = new HashSet<>(); for (int num : arr) set.add(num); return set.stream().mapToInt(i -> i).toArray(); } public static void main(String[] args) { System.out.println(Arrays.toString(removeDuplicates(new int[]{1, 2, 2, 3, 4, 4}))); // [1, 2, 3, 4] } }",
    "output": "removeDuplicates(new int[]{1, 2, 2, 3, 4, 4}) // [1, 2, 3, 4]"
  },
  {
    "question": "Write a function to check if a number is prime.",
    "answer": "public class Solution { public static boolean isPrime(int n) { if (n <= 1) return false; for (int i = 2; i <= Math.sqrt(n); i++) { if (n % i == 0) return false; } return true; } public static void main(String[] args) { System.out.println(isPrime(7)); // true System.out.println(isPrime(10)); // false } }",
    "output": "isPrime(7) // true"
  },
  {
    "question": "Write a function to count the number of vowels in a string.",
    "answer": "public class Solution { public static int countVowels(String str) { int count = 0; for (int i = 0; i < str.length(); i++) { char c = str.charAt(i); if (\"aeiouAEIOU\".indexOf(c) != -1) count++; } return count; } public static void main(String[] args) { System.out.println(countVowels(\"hello\")); // 2 } }",
    "output": "countVowels(\"hello\") // 2"
  },
  {
    "question": "Write a function to check if two strings are anagrams.",
    "answer": "public class Solution { public static boolean areAnagrams(String str1, String str2) { if (str1.length() != str2.length()) return false; char[] arr1 = str1.toCharArray(); char[] arr2 = str2.toCharArray(); Arrays.sort(arr1); Arrays.sort(arr2); return Arrays.equals(arr1, arr2); } public static void main(String[] args) { System.out.println(areAnagrams(\"listen\", \"silent\")); // true System.out.println(areAnagrams(\"hello\", \"world\")); // false } }",
    "output": "areAnagrams(\"listen\", \"silent\") // true"
  },
  {
    "question": "Write a function to calculate the factorial of a number.",
    "answer": "public class Solution { public static int factorial(int n) { int result = 1; for (int i = 1; i <= n; i++) { result *= i; } return result; } public static void main(String[] args) { System.out.println(factorial(5)); // 120 } }",
    "output": "factorial(5) // 120"
  },
  {
    "question": "Write a function to find the Fibonacci sequence up to a given number.",
    "answer": "public class Solution { public static void fibonacci(int n) { int a = 0, b = 1; for (int i = 0; i < n; i++) { System.out.print(a + \" \"); int temp = a; a = b; b = temp + b; } } public static void main(String[] args) { fibonacci(5); // 0 1 1 2 3 } }",
    "output": "fibonacci(5) // 0 1 1 2 3"
  },
  {
    "question": "Write a function to calculate the greatest common divisor (GCD) of two numbers.",
    "answer": "public class Solution { public static int gcd(int a, int b) { if (b == 0) return a; return gcd(b, a % b); } public static void main(String[] args) { System.out.println(gcd(12, 15)); // 3 } }",
    "output": "gcd(12, 15) // 3"
  },
  {
    "question": "Write a function to find the smallest element in an array.",
    "answer": "public class Solution { public static int findSmallest(int[] arr) { int smallest = arr[0]; for (int num : arr) { if (num < smallest) smallest = num; } return smallest; } public static void main(String[] args) { System.out.println(findSmallest(new int[]{3, 1, 4, 2})); // 1 } }",
    "output": "findSmallest(new int[]{3, 1, 4, 2}) // 1"
  },
  {
    "question": "Write a function to find the largest element in an array.",
    "answer": "public class Solution { public static int findLargest(int[] arr) { int largest = arr[0]; for (int num : arr) { if (num > largest) largest = num; } return largest; } public static void main(String[] args) { System.out.println(findLargest(new int[]{3, 1, 4, 2})); // 4 } }",
    "output": "findLargest(new int[]{3, 1, 4, 2}) // 4"
  },
  {
    "question": "Write a function to check if a string contains only digits.",
    "answer": "public class Solution { public static boolean isDigit(String str) { return str.matches(\"\\d+\"); } public static void main(String[] args) { System.out.println(isDigit(\"12345\")); // true System.out.println(isDigit(\"abc123\")); // false } }",
    "output": "isDigit(\"12345\") // true"
  },
  {
    "question": "Write a function to generate all possible substrings of a string.",
    "answer": "public class Solution { public static void generateSubstrings(String str) { for (int i = 0; i < str.length(); i++) { for (int j = i + 1; j <= str.length(); j++) { System.out.println(str.substring(i, j)); } } } public static void main(String[] args) { generateSubstrings(\"abc\"); } }",
    "output": "generateSubstrings(\"abc\") // a, ab, abc, b, bc, c"
  },
  {
    "question": "Write a function to check if a number is even or odd.",
    "answer": "public class Solution { public static String evenOrOdd(int n) { return (n % 2 == 0) ? \"Even\" : \"Odd\"; } public static void main(String[] args) { System.out.println(evenOrOdd(4)); // Even System.out.println(evenOrOdd(7)); // Odd } }",
    "output": "evenOrOdd(4) // Even"
  },
  {
    "question": "Write a function to calculate the sum of the first N even numbers.",
    "answer": "public class Solution { public static int sumEvenNumbers(int n) { int sum = 0; for (int i = 2; i <= n * 2; i += 2) { sum += i; } return sum; } public static void main(String[] args) { System.out.println(sumEvenNumbers(5)); // 30 } }",
    "output": "sumEvenNumbers(5) // 30"
  },
  {
    "question": "Write a function to check if a string contains only uppercase letters.",
    "answer": "public class Solution { public static boolean isUpperCase(String str) { return str.equals(str.toUpperCase()); } public static void main(String[] args) { System.out.println(isUpperCase(\"HELLO\")); // true System.out.println(isUpperCase(\"Hello\")); // false } }",
    "output": "isUpperCase(\"HELLO\") // true"
  },
  {
    "question": "Write a function to print the multiplication table of a number.",
    "answer": "public class Solution { public static void printMultiplicationTable(int n) { for (int i = 1; i <= 10; i++) { System.out.println(n + \" x \" + i + \" = \" + (n * i)); } } public static void main(String[] args) { printMultiplicationTable(5); } }",
    "output": "printMultiplicationTable(5) // prints 5 x 1 = 5, 5 x 2 = 10, ... "
  }
  ,
  {
    "question": "Write a function to check if a number is a perfect square.",
    "answer": "public class Solution { public static boolean isPerfectSquare(int n) { int sqrt = (int) Math.sqrt(n); return sqrt * sqrt == n; } public static void main(String[] args) { System.out.println(isPerfectSquare(16)); // true System.out.println(isPerfectSquare(20)); // false } }",
    "output": "isPerfectSquare(16) // true"
  },
  {
    "question": "Write a function to merge two sorted arrays.",
    "answer": "public class Solution { public static int[] mergeArrays(int[] arr1, int[] arr2) { int[] result = new int[arr1.length + arr2.length]; int i = 0, j = 0, k = 0; while (i < arr1.length && j < arr2.length) { if (arr1[i] < arr2[j]) result[k++] = arr1[i++]; else result[k++] = arr2[j++]; } while (i < arr1.length) result[k++] = arr1[i++]; while (j < arr2.length) result[k++] = arr2[j++]; return result; } public static void main(String[] args) { System.out.println(Arrays.toString(mergeArrays(new int[]{1, 3, 5}, new int[]{2, 4, 6}))); // [1, 2, 3, 4, 5, 6] } }",
    "output": "mergeArrays(new int[]{1, 3, 5}, new int[]{2, 4, 6}) // [1, 2, 3, 4, 5, 6]"
  },
  {
    "question": "Write a function to find the intersection of two arrays.",
    "answer": "public class Solution { public static int[] intersect(int[] arr1, int[] arr2) { Set<Integer> set = new HashSet<>(); for (int num : arr1) set.add(num); List<Integer> result = new ArrayList<>(); for (int num : arr2) { if (set.contains(num)) { result.add(num); set.remove(num); } } return result.stream().mapToInt(i -> i).toArray(); } public static void main(String[] args) { System.out.println(Arrays.toString(intersect(new int[]{1, 2, 2, 1}, new int[]{2, 2}))); // [2, 2] } }",
    "output": "intersect(new int[]{1, 2, 2, 1}, new int[]{2, 2}) // [2, 2]"
  },
  {
    "question": "Write a function to find the largest prime factor of a number.",
    "answer": "public class Solution { public static int largestPrimeFactor(int n) { int largest = -1; while (n % 2 == 0) { largest = 2; n /= 2; } for (int i = 3; i <= Math.sqrt(n); i += 2) { while (n % i == 0) { largest = i; n /= i; } } if (n > 2) largest = n; return largest; } public static void main(String[] args) { System.out.println(largestPrimeFactor(100)); // 5 } }",
    "output": "largestPrimeFactor(100) // 5"
  },
  {
    "question": "Write a function to calculate the power of a number.",
    "answer": "public class Solution { public static double power(double base, int exponent) { return Math.pow(base, exponent); } public static void main(String[] args) { System.out.println(power(2, 3)); // 8.0 } }",
    "output": "power(2, 3) // 8.0"
  },
  {
    "question": "Write a function to find the median of an array.",
    "answer": "public class Solution { public static double findMedian(int[] arr) { Arrays.sort(arr); if (arr.length % 2 != 0) return arr[arr.length / 2]; else return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2.0; } public static void main(String[] args) { System.out.println(findMedian(new int[]{1, 3, 2})); // 2.0 } }",
    "output": "findMedian(new int[]{1, 3, 2}) // 2.0"
  },
  {
    "question": "Write a function to remove all non-alphabetic characters from a string.",
    "answer": "public class Solution { public static String removeNonAlpha(String str) { return str.replaceAll(\"[^a-zA-Z]\", \"\"); } public static void main(String[] args) { System.out.println(removeNonAlpha(\"Hello123!\")); // Hello } }",
    "output": "removeNonAlpha(\"Hello123!\") // Hello"
  },
  {
    "question": "Write a function to check if a string is an anagram of another string.",
    "answer": "public class Solution { public static boolean isAnagram(String str1, String str2) { if (str1.length() != str2.length()) return false; char[] arr1 = str1.toCharArray(); char[] arr2 = str2.toCharArray(); Arrays.sort(arr1); Arrays.sort(arr2); return Arrays.equals(arr1, arr2); } public static void main(String[] args) { System.out.println(isAnagram(\"listen\", \"silent\")); // true System.out.println(isAnagram(\"hello\", \"world\")); // false } }",
    "output": "isAnagram(\"listen\", \"silent\") // true"
  },
  {
    "question": "Write a function to find the LCM (Least Common Multiple) of two numbers.",
    "answer": "public class Solution { public static int lcm(int a, int b) { return (a * b) / gcd(a, b); } public static int gcd(int a, int b) { if (b == 0) return a; return gcd(b, a % b); } public static void main(String[] args) { System.out.println(lcm(12, 15)); // 60 } }",
    "output": "lcm(12, 15) // 60"
  },
  {
    "question": "Write a function to check if a number is a power of two.",
    "answer": "public class Solution { public static boolean isPowerOfTwo(int n) { return (n > 0) && (n & (n - 1)) == 0; } public static void main(String[] args) { System.out.println(isPowerOfTwo(16)); // true System.out.println(isPowerOfTwo(18)); // false } }",
    "output": "isPowerOfTwo(16) // true"
  },
  {
    "question": "Write a function to find the sum of elements in an array.",
    "answer": "public class Solution { public static int sumArray(int[] arr) { int sum = 0; for (int num : arr) { sum += num; } return sum; } public static void main(String[] args) { System.out.println(sumArray(new int[]{1, 2, 3, 4})); // 10 } }",
    "output": "sumArray(new int[]{1, 2, 3, 4}) // 10"
  },
  {
    "question": "Write a function to find the longest word in a string.",
    "answer": "public class Solution { public static String longestWord(String str) { String[] words = str.split(\" \"); String longest = \"\"; for (String word : words) { if (word.length() > longest.length()) longest = word; } return longest; } public static void main(String[] args) { System.out.println(longestWord(\"I love programming in Java\")); // programming } }",
    "output": "longestWord(\"I love programming in Java\") // programming"
  },
  {
    "question": "Write a function to count the occurrences of a character in a string.",
    "answer": "public class Solution { public static int countOccurrences(String str, char c) { int count = 0; for (int i = 0; i < str.length(); i++) { if (str.charAt(i) == c) count++; } return count; } public static void main(String[] args) { System.out.println(countOccurrences(\"hello\", 'l')); // 2 } }",
    "output": "countOccurrences(\"hello\", 'l') // 2"
  },
  {
    "question": "Write a function to find the common elements between two arrays.",
    "answer": "public class Solution { public static Set<Integer> commonElements(int[] arr1, int[] arr2) { Set<Integer> set1 = new HashSet<>(); Set<Integer> common = new HashSet<>(); for (int num : arr1) set1.add(num); for (int num : arr2) { if (set1.contains(num)) common.add(num); } return common; } public static void main(String[] args) { System.out.println(commonElements(new int[]{1, 2, 3}, new int[]{2, 3, 4})); // [2, 3] } }",
    "output": "commonElements(new int[]{1, 2, 3}, new int[]{2, 3, 4}) // [2, 3]"
  },
  {
    "question": "Write a function to check if a number is a palindrome.",
    "answer": "public class Solution { public static boolean isPalindrome(int n) { int original = n, reverse = 0; while (n != 0) { reverse = reverse * 10 + n % 10; n /= 10; } return original == reverse; } public static void main(String[] args) { System.out.println(isPalindrome(121)); // true System.out.println(isPalindrome(123)); // false } }",
    "output": "isPalindrome(121) // true"
  },
  {
    "question": "Write a function to calculate the sum of the first N natural numbers.",
    "answer": "public class Solution { public static int sumOfNaturalNumbers(int n) { return n * (n + 1) / 2; } public static void main(String[] args) { System.out.println(sumOfNaturalNumbers(5)); // 15 } }",
    "output": "sumOfNaturalNumbers(5) // 15"
  },
  {
    "question": "Write a function to swap two numbers.",
    "answer": "public class Solution { public static void swap(int a, int b) { a = a + b; b = a - b; a = a - b; System.out.println(\"a: \" + a + \" b: \" + b); } public static void main(String[] args) { swap(5, 10); } }",
    "output": "swap(5, 10) // a: 10 b: 5"
  }
  ,




  {
    "question": "Write a function to convert a string to title case.",
    "answer": "public class Solution { public static String toTitleCase(String str) { String[] words = str.split(\" \"); StringBuilder result = new StringBuilder(); for (String word : words) { result.append(word.substring(0, 1).toUpperCase()).append(word.substring(1).toLowerCase()).append(\" \"); } return result.toString().trim(); } public static void main(String[] args) { System.out.println(toTitleCase(\"hello world\")); // 'Hello World' } }",
    "output": "toTitleCase(\"hello world\") // 'Hello World'"
  },
  {
    "question": "Write a function to find the common divisor of two numbers.",
    "answer": "public class Solution { public static int gcd(int a, int b) { if (b == 0) return a; return gcd(b, a % b); } public static void main(String[] args) { System.out.println(gcd(12, 15)); // 3 } }",
    "output": "gcd(12, 15) // 3"
  },
  {
    "question": "Write a function to check if a number is a prime number.",
    "answer": "public class Solution { public static boolean isPrime(int n) { if (n <= 1) return false; for (int i = 2; i <= Math.sqrt(n); i++) { if (n % i == 0) return false; } return true; } public static void main(String[] args) { System.out.println(isPrime(7)); // true System.out.println(isPrime(10)); // false } }",
    "output": "isPrime(7) // true"
  },

];
