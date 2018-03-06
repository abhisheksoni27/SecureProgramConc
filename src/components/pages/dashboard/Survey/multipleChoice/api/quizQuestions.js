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
  }
];

export default quizQuestions;
