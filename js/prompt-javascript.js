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
  "Write about a time you laughed really damn hard.",
  "What's something that makes you instantly happy?",
  "Write yourself a letter to be read in the future.",
  "Remind yourself of your strengths.",
  "What do you want? Like truly want?",
  "What would you do if money were no object?",
  "What's one good change you've seen in yourself this month?",
  "Write about a stranger you remember.",
  "How do you think people perceive you? How do you perceive yourself?",
  "Describe your youth, what will you want to remember?",
  "How are you REALLY doing today?",
  "When do you feel most at peace?",
  "What's a lesson you've recently learned?",
  "What's something that should be getting more of your attention?",
  "What is your personal motto? If you don't have one, make one.",
  "How do you measure success in your life?",
  "What never fails to give you hope?",
  "Write a letter to your favorite place in the world.",
  "What's a quality you value?",
  "When do you feel your most powerful?",
  "What inspires you to get out of bed?",
  "What do you miss most of your childhood?",
  "What are you thankful for right now?",
  "What does a carefree life look like?",
  "What is your 10 year older self telling your current self not to worry about?",
  "What's been your favorite memory from the past week?",
  "Write about one of your travel stories.",
  "How is your relationship with solitude?",
  "What is your biggest challenge right now? How are you going to overcome it?",
  "What's something you appreciate about your family?",
  "Write about your relationship with money.",
  "When do you feel most yourself?",
  "When did you first become aware of your race?",
  "How can you uplift others?",
  "Write about your pain.",
  "Write about your relationship with nature.",
  "How can you be more mindful?",
  "Would your ancestors be proud of you?",
  "What was your childhood dream job?",
  "What's the nicest thing you've done for someone?",
  "Where do you get energy?",
  "What's your ideal weekend?",
  "What's your superpower?",
  "Write about summer.",
  "Where do you think you'll end up living?",
  "Write about humor.",
  "What's your relationship with time?",
  "Write about whatever you feel like writing about!",
  "Set a goal for your week.",
  "What is Love?",
  "Write about your favorite teacher.",
  "What's something that scares you that you want to do?",
  "Try and predict where you will be next year",
  "What frustrates you?",
  "Write about your grandparents",
  "How do you celebrate life?",
  "What do you love about your friends?",
  "Write about a time that you stood up for yourself"
  ]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (prompts.length));
  document.getElementById('promptDisplay').innerHTML = prompts[randomNumber];
}