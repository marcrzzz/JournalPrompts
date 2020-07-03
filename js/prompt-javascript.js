var prompts = [
  "What was the first thing on your mind today?",
  "What are you currently missing the most?",
  "What's something you learned this week?",
  "Did you think you'd be where you are right now?",
  "What do you know now that you really need to be happy/full with yourself?",
  "What will you be proud of in 5 years?",
  "What do you think you'll miss about your life as it is right now?",
  "What would your kid version think of you now? How have you changed, how have you stayed the same?",
  "Where do you think your dreams come from when you dream at night?",
  "What is a small joy you can appreciate on the weekends?",
  "What is something you want to see more of in the world? How can you start creating it?",
  "What do you actually care about?",
  "Are you like your family? How so? How not?",
  "Write about a time you laughed really damn hard."
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (prompts.length));
  document.getElementById('promptDisplay').innerHTML = prompts[randomNumber];
}