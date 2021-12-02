# **CheckTellMe ✅**

## Checktellme is a string checking project. 

<br>

### *The goal is to offer features allowing you to check what your users enter in your forms.*

<br>

### *Checktellme currently offers you a functionality allowing you to verify in a thorough way and according to standards established by the RFC, email addresses.*

<br>

### **Other features will be coming soon.**

<br>

## **🎓 Usage:**

### *In the src directory you will find 2 javascript files which represent a script with regular expression and another without regular expression.*

<br>

### 1. **In the "check-email-with-regex.js" file there is a checkMail() function which will perform certain operations using regular expressions:**

1. Test a regular expression respecting RFC standards as well as the number of bytes authorized by it.
2. Extract the domain name extension from the user's email address.
3. Compare this extension with an Array containing all the domain name extensions existing in this world.
4. Check if the boolean is true or false.
5. Return a boolean.

#### **⚠️ This version of checkMail() using regular expressions is deprecated on the Safari desktop browser, as well as on virtually all mobile browsers ⚠️**

<br>

### 2. **In the "check-email-without-regex.js" file there is a checkMail() function which will perform certain operations without using regular expressions:**

1. Check the maximum number of bytes allowed according to RFC standards.
2. Check the local string of an email address according to RFC standards.
3. Check the hostname string of an email address according to RFC standards.
4. Compare this extension with an Array containing all the domain name extensions existing in this world.
5. Return a boolean.

<br>

### **🔌 Let's plug that into the index.html file:**

1. We place an "onsubmit" attribute which returns the checkMail function like this:

    \<form action="" id="form" onsubmit="return checkMail()">

2. In the input type submit tag, we have placed an "onclick" attribute with the checkMail() function as value like this:

    \<input type="submit" value="Valider" onclick="checkMail()" id="submit">

<br>

## **🎁 Gift:**

### In the "utils" directory, I offer you a list of Array classified by region with their domain name extensions. In all, there are 540 extensions. It also includes gTLD extensions and some others.

<br>

## **✅ Test:**

### You can test this functionality live at this url:

### https://mail.checktellme.com/

<br>

## **🤔 Issues:**

### If you think that some things are not working as expected, or that this functionality could be improved, please let me know, it will be a pleasure for me to receive your requests.

<br>

## **📝 N.B:**

### If you like this repository, do not hesitate to follow me on Github, and put a star ❤️ ⭐.