var quizQuestions = [
  {
      question: "Select the best practice to protect information on a computer:  prevent leakage of secret information",
      answers: [
          {
              type: "Microsoft",
              content: "Avoid hard-coding secrets and passwords"
          },
          {
              type: "Nintendo",
              content: "Use encryption"
          },
          {
              type: "Sony1",
              content: "Hide information the user doesn't need to know about"
          },
          {
              type: "Sony2",
              content: "Only use trusted coding libraries"
          }
      ]
  },
  {
      question: "After you have finished with a pointer p that you have obtained via malloc, you need to free the space given by malloc. You type: 1 free(p); After this line, what is the best practice for ensuring that the pointer cannot be accidentially used again?",
      answers: [
          {
              type: "Microsoft",
              content: "Nothing; free(p) already prevents the point from being used again"
          },
          {
              type: "Nintendo",
              content: "Call free(p) again to make sure that the space is freed.Nintendo 64"
          },
          {
              type: "Sony3",
              content: "Set p to a valid but unused memory address"
          },
          {
              type: "Sony2",
              content: "Set p to NULL."
          },
          {
              type: "Son1y",
              content: "Set p to a unique invalid memory address."
          }
      ]
  },
  {
      question: "For part of your program's user interface, you need to take date information from the user and display it in a format that they specify. What is the safest way to do this?",
      answers: [
          {
              type: "Microsoft",
              content: "Accept a format string directly from the user."
          },
          {
              type: "Nintendo",
              content: "Directly concatenate the user input with a pre-formed format string."
          },
          {
              type: "Sony",
              content: "Concatenate an escaped user input string with a pre-formed format string."
          }
      ]
  },
  {
      question: "A piece of code you have been asked to review contains a hard-coded set of credentials for debugging purposes, only used when a DEBUG flag is set. What action do you recommend?",
      answers: [
          {
              type: "Microsoft",
              content: "DEBUG can only be used on the company IP address rangeBioShock"
          },
          {
              type: "Nintendo",
              content: "Make sure the username and password are strong and could not be guessed easily."
          },
          {
              type: "Sony",
              content: "Remove the hard-coded credentials entirely, so that no-on can use them, even for debugging."
          },
          {
              type: "Sony1",
              content: "Remove all code accessing the DEBUG flag, so that no-one can turn it on in production."
          },
          {
              type: "Sony2",
              content: "Make sure the username and password are encrypted."
          }
      ]
  },
  {
      question: "User input can be unpredictable. Which of the following is the best way to avoid problems processing that input?",
      answers: [
          {
              type: "Microsoft",
              content: "Use lowest privileges when processing user-provided input, to limit the effects of bad user input."
          },
          {
              type: "Nintendo",
              content: "Drop unnecessary privileges when processing user-provided input, to limit the effects of bad user input."
          },
          {
              type: "Sony",
              content: "Keep privileges constant whenever possible, for more readable code that is easier to maintain without introducing error."
          },
          {
              type: "Sony1",
              content: "Assign elevated privileges to a new process or thread that reads the input and does the computation, so that any malicious side-effects do not affect the primary process or thread."
          },
          {
              type: "Sony2",
              content: "Keep privileges the same but constrain the process execution in a sandbox so that any malicious side-effects are contained."
          }
      ]
  },
  {
      question: "Explain the choice of a file descriptor over the filename as the channel to securely access a file.",
      answers: [
          {
              type: "Microsoft",
              content: "A file descriptor is a data structure that allows only me to use the file for as long as it is open, while the file name does not."
          },
          {
              type: "Nintendo",
              content: "The file descriptor is an abstraction that makes for more understandable code."
          },
          {
              type: "Sony",
              content: "The file descriptor is a pointer to the file that stays the same regardless of changes to the file name or location."
          },
          {
              type: "Sony1",
              content: "The file descriptor is a data structure that encapsulates the file name."
          },
          {
              type: "Sony2",
              content: "The file descriptor is a data structure that represents the validated file name."
          }
      ]
  },
  {
      question: "Select the best practice for ensuring that arguments that have come into a function are valid.",
      answers: [
          {
              type: "Microsoft",
              content: " I should check the arguments when the call comes from code I didn't write, because there could be an intentional or accidental misuse."
          },
          {
              type: "Nintendo",
              content: "I should check the arguments every time because I cannot be completely sure where and how the function is called every time."
          },
          {
              type: "Sony",
              content: "I should not need to check the arguments because I can use data types that restrict the values of the variables to a certain allowed range."
          },
          {
              type: "Sony1",
              content: "I should check the arguments when I test the function, so my program can run faster."
          }
      ]
  },
  {
      question: "Choose the best definition of \"buffer overflow\".",
      answers: [
          {
              type: "Microsoft",
              content: "The buffer allocated is larger than the data intended for it."
          },
          {
              type: "Nintendo",
              content: "When a buffer is dynamically allocated, it is longer than requested."
          },
          {
              type: "Sony",
              content: "The buffer pointer is off by one."
          },
          {
              type: "Sony1",
              content: "The buffer allocated is smaller than the data copied into it."
          },
          {
              type: "Sony2",
              content: "There is no code to check that the input fits into the buffer."
          }
      ]
  },
  {
      question: "Select the statement that best represents how privileges should be handled when a program executes.",
      answers: [
          {
              type: "Microsoft",
              content: "Create a system user to carry out all actions that require higher privileges."
          },
          {
              type: "Nintendo",
              content: "Elevate privileges when needed and drop privileges when you can."
          },
          {
              type: "Sony",
              content: "Sandbox the process so that any actions it takes are constrained."
          },
          {
              type: "Sony1",
              content: "Spawn a subprocess to carry out all actions that require higher privileges."
          }
      ]
  },
  {
      question: "Which of the following can store the largest positive value?",
      answers: [
          {
              type: "Microsoft",
              content: "unsigned char"
          },
          {
              type: "Nintendo",
              content: "unsigned int"
          },
          {
              type: "Sony",
              content: "signed int"
          },
          {
              type: "Sony1",
              content: "signed short"
          }
      ]
  },
  {
      question: "You are developing a library that keeps track of data for a large, complex data store. You write an access method that allows a user to query the value of a certain piece of data. What is the most robust way to let the user know the data?",
      answers: [
          {
              type: "Microsoft",
              content: "Return the value."
          },
          {
              type: "Nintendo",
              content: "Return the library’s reference to the value."
          },
          {
              type: "Sony",
              content: "Use encryption."
          },
          {
              type: "Sony1",
              content: "Return a pointer to the data"
          }
      ]
  },
  {
      question: "Your program will be running in a system with many other programs. It will take a file name as an input string from the user or from the calling program, then manipulate the file. Which statement below is most reflective of the security considerations for this input string?",
      answers: [
          {
              type: "Microsoft",
              content: "If the system requires high integrity, I may only be concerned with whether the input string translates to a real file location."
          },
          {
              type: "Nintendo",
              content: "If the system requires high integrity, I should not accept outside input."
          },
          {
              type: "Sony",
              content: "If the system does not require high integrity, I may only be concerned with whether the input string translates to a real file location."
          },
          {
              type: "Sony1",
              content: " Even if the system does not require high integrity, I still should not accept outside input."
          }
      ]
  },
  {
      question: "You must take in a list of user names and starting date: day, month, year. Then your program must sort them in ascending order to create a list of users by seniority. Some start dates are missing the exact day of the start date, or the month. This list-sorting function may also be used elsewhere, or tweaked in the future. Which statement below is the most robust way to handle the missing data?",
      answers: [
          {
              type: "Microsoft",
              content: "Initialize the variables for missing information with a random plausible value."
          },
          {
              type: "Nintendo",
              content: "Leave the variables for missing information uninitialized."
          },
          {
              type: "Sony",
              content: "Initialize the variables for missing information with 0."
          },
          {
              type: "Sony1",
              content: "Initialize the variables for missing information with the maximum plausible value."
          }
      ]
  },
  {
      question: "What happens when a buffer overflow occurs?",
      answers: [
          {
              type: "Microsoft",
              content: "The program crashes"
          },
          {
              type: "Nintendo",
              content: "The contents of the buffer, and of the memory locations beyond the end of the buffer, are altered."
          },
          {
              type: "Sony",
              content: "The return address of the function that called the current function is altered."
          },
          {
              type: "Sony1",
              content: "The program execution immediately jumps to another function in the program"
          }
      ]
  },
  {
      question: "Which is the best function to use to write a formatted string into a memory buffer?",
      answers: [
          {
              type: "Microsoft",
              content: "sprintf()"
          },
          {
              type: "Nintendo",
              content: "snprintf()"
          },
          {
              type: "Sony",
              content: "fprintf()"
          },
          {
              type: "Sony1",
              content: "strcpy()"
          },
          {
              type: "Sony2",
              content: "strncpy()"
          }
      ]
  },
  {
      question: "If a bit in the processor status word prevents the computer from executing instructions stored on the program stack from executing, which of the following is (are) true?",
      answers: [
          {
              type: "Microsoft",
              content: "This eliminates the danger of a buffer overflow attack."
          },
          {
              type: "Nintendo",
              content: "The attacker must create data that overwrites the processor status word to enable the bit along with the instructions that she wishes to execute and the address where those instructions are stored."
          },
          {
              type: "Sony",
              content: "Buffer overflow attacks are possible but must not use the stack."
          },
          {
              type: "Sony1",
              content: "Buffer overflows can still use the stack but will cause the program to crash."
          },
          {
              type: "Sony2",
              content: "Buffer overflows can still use the stack without causing the program to crash"
          }
      ]
  },
  {
      question: "When testing a very large software program which of the following is most likely to catch a buffer overflow?",
      answers: [
          {
              type: "Microsoft",
              content: "Inspect the binary code in the executable for places where bounds are not checked."
          },
          {
              type: "Nintendo",
              content: "Test the program using data that will be used in production"
          },
          {
              type: "Sony",
              content: "Test the program using large amounts of random data as input."
          },
          {
              type: "Sony1",
              content: "Have the developer provide input to see if the program will crash"
          },
          {
              type: "Sony2",
              content: "Sell the program and let the purchasers find the buffer overflow"
          }
      ]
  },
  {
      question: "What is the effect of not disabling a signal being handled in the signal handler?",
      answers: [
          {
              type: "Microsoft",
              content: "Nothing; the system automatically disables additional interrupts"
          },
          {
              type: "Nintendo",
              content: "The signal handler might be re-invoked before it returns"
          },
          {
              type: "Sony",
              content: "While the signal handler will not be re-invoked, another signal handler might be invoked should a different interrupt occur. The additional interrupts are always blocked, and will be invoked when the signal handler exits"
          },
          {
              type: "Sony1",
              content: "The signal handler, and hence the program, will crash"
          }
      ]
  },
  {
      question: "You are writing a program that will be run on a system that does not allow execution of instructions that are on the program stack. Which of the following is most true?",
      answers: [
          {
              type: "Microsoft",
              content: "Buffer overflows are no longer a threat because any instructions you upload cannot be executed."
          },
          {
              type: "Nintendo",
              content: "Buffer overflows are still a threat because what you upload to the stack can cause a jump to functions already within the program."
          },
          {
              type: "Sony",
              content: "Buffer overflows are still a threat because you can turn on the execution of instructions on the stack by changing a bit in the processor status word stored on the stack."
          },
          {
              type: "Sony2",
              content: "Buffer overflows are no longer a threat because any attempt to upload instructions will cause a trap and hence the program will crash."
          }
      ]
  },
  {
      question: "What does malloc(0) do?",
      answers: [
          {
              type: "Microsoft",
              content: "It returns the null pointer"
          },
          {
              type: "Nintendo",
              content: "It points to the zero address in memory"
          },
          {
              type: "Sony",
              content: "It prints an error message and terminates the program"
          },
          {
              type: "Sony1",
              content: "It’s behavior is implementation defined"
          }
      ]
  }
];

export default quizQuestions;
