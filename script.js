const userMessage = [
    ["bal tui"],
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["are you genious", "are you nerd", "are you intelligent"],
    ["i hate you", "i dont like you"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["ami n bohut depressed"],
    ["what are you doing", "ki korish tui", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you", "who is your creator"],
  
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["tui bhai amar"],
    ["you are funny"],
    ["i dont know"],
    ["ami ki moti"],
    ["boring"],
    ["im tired"],
   
        ["Can you help with my bill", "I need help with my bill", "Help me with my bill"],
        ["How do I fix my phone", "My phone is broken", "Phone troubleshooting"],
        ["What are the best study tips", "How to study effectively", "Study tips"],
        ["How do I cook a turkey", "Turkey recipe", "How to make a turkey"],
        ["What should I wear today", "Help me choose an outfit", "Fashion advice"],
        ["How can I improve my diet", "Tips for eating healthier", "Healthy eating tips"],
        ["Can you suggest a workout", "Best exercises for fitness", "Workout recommendations"],
        ["How do I plan a budget", "Tips for budgeting", "Financial planning advice"],
        ["How to deal with stress", "Stress management techniques", "Dealing with stress"],
        ["What are good study habits", "Effective study strategies", "Study habits"],
        ["How can I improve my sleep", "Tips for better sleep", "Sleep improvement"],
        ["What are the best apps for productivity", "Productivity apps", "App recommendations"],
        ["How do I start a new project", "Project planning tips", "Starting a project"],
        ["Can you recommend a good book", "Book suggestions", "What book should I read"],
        ["How do I get motivated", "Motivation tips", "How to stay motivated"],
        ["What are some good hobbies", "Hobby ideas", "New hobbies to try"],
        ["How can I improve my relationship", "Relationship tips", "Strengthening relationships"],
        ["What should I do on a date", "Date ideas", "Date planning"],
        ["How do I write a resume", "Resume writing tips", "Creating a resume"],
        ["Can you help me with my essay", "Essay writing tips", "Help with essays"],
        ["What are the best relaxation techniques", "Relaxation tips", "How to relax"],
        ["How do I manage my time effectively", "Time management tips", "Improving time management"],
        ["Can you suggest a romantic movie", "Romantic movie recommendations", "What romantic movies to watch"],
        ["What should I cook for dinner", "Dinner recipes", "Meal suggestions"],
        ["How do I start exercising", "Exercise tips", "Getting started with exercise"],
        ["What are some fun activities to do", "Fun things to do", "Activity ideas"],
        ["How do I improve my communication skills", "Communication tips", "Better communication"],
        ["Can you recommend a good podcast", "Podcast suggestions", "What podcasts to listen to"],
        ["What are the best ways to save money", "Money-saving tips", "How to save money"],
        ["How do I deal with anxiety", "Anxiety management tips", "Dealing with anxiety"],
        ["Can you suggest a weekend getaway", "Weekend trip ideas", "Places to visit on the weekend"],
        ["How do I organize my home", "Home organization tips", "Organizing your space"],
        ["What are some good self-care practices", "Self-care tips", "Taking care of yourself"],
        ["How do I deal with a difficult boss", "Handling a difficult boss", "Workplace tips"],
        ["Can you recommend a good restaurant", "Restaurant suggestions", "Where to eat out"],
        ["What are some good ways to relax after work", "Post-work relaxation tips", "Unwinding after work"],
        ["How do I improve my public speaking skills", "Public speaking tips", "Becoming a better speaker"],
        ["Can you help me with my diet plan", "Diet plan tips", "Creating a diet plan"],
        ["What are some fun date ideas", "Date ideas", "Romantic activities"],
        ["How do I plan a vacation", "Vacation planning tips", "Travel tips"],
        ["What are the best ways to learn a new skill", "Learning tips", "Skill development advice"],
        ["Can you suggest a fun game", "Game recommendations", "What games to play"],
        ["How do I improve my fitness", "Fitness tips", "Getting fit"],
        ["What are the best ways to improve my health", "Health improvement tips", "Becoming healthier"],
        ["Can you recommend a good book to read", "Book recommendations", "Reading suggestions"],
        ["How do I create a budget", "Budgeting tips", "Financial management"],
        ["What are some good ways to relieve stress", "Stress relief tips", "Managing stress"],
        ["How do I find a new hobby", "Finding new hobbies", "Hobby suggestions"],
        ["What are the best ways to save money on groceries", "Grocery saving tips", "Saving on food"],
        ["Can you suggest a new fitness routine", "Fitness routine ideas", "Exercise plan"],
        ["How do I improve my time management skills", "Time management tips", "Productivity advice"],
        ["What are some good self-improvement books", "Self-improvement book recommendations", "Books for personal growth"],
        ["Can you recommend a fun activity for the weekend", "Weekend activities", "What to do on the weekend"],
        ["How do I deal with a breakup", "Breakup advice", "Healing after a breakup"],
        ["What are the best ways to manage my stress levels", "Stress management tips", "Managing stress"],
        ["How do I improve my sleeping habits", "Better sleep tips", "Sleep improvement strategies"],
        ["Can you suggest a romantic gift", "Romantic gift ideas", "Gift suggestions"],
        ["How do I plan a surprise party", "Party planning tips", "Organizing a surprise"],
        ["What are the best ways to improve my cooking skills", "Cooking tips", "Becoming a better cook"],
        ["Can you recommend a relaxing activity", "Relaxation activities", "Ways to unwind"],
        ["How do I improve my relationship with my partner", "Relationship improvement tips", "Strengthening bonds"],
        ["What are some good ways to celebrate an anniversary", "Anniversary ideas", "Celebration suggestions"],
        ["How do I create a workout plan", "Workout planning tips", "Exercise routine"],
        ["Can you suggest a fun movie to watch", "Movie recommendations", "What to watch"],
        ["What are the best ways to stay motivated", "Staying motivated tips", "Maintaining motivation"],
        ["How do I organize my work schedule", "Work schedule tips", "Time management"],
        ["Can you recommend a good yoga routine", "Yoga routine ideas", "Best yoga exercises"],
        ["How do I improve my financial situation", "Financial improvement tips", "Managing finances"],
        ["What are some good relationship books", "Relationship book recommendations", "Books about relationships"],
        ["How do I handle difficult conversations", "Handling conversations tips", "Communication advice"],
        ["Can you suggest a fun activity for a date", "Date activity ideas", "Romantic things to do"],
        ["What are the best ways to stay healthy", "Health tips", "Maintaining health"],
        ["How do I manage my work-life balance", "Work-life balance tips", "Balancing work and life"],
        ["Can you recommend a good comedy show", "Comedy recommendations", "What to watch for laughs"],
        ["How do I plan a road trip", "Road trip planning tips", "Travel advice"],
        ["What are the best ways to improve my diet", "Diet improvement tips", "Healthy eating strategies"],
        ["Can you suggest a new hobby to try", "New hobby ideas", "What to try next"],
        ["How do I create a self-care routine", "Self-care tips", "Creating a routine"],
        ["What are some good tips for a first date", "First date tips", "Dating advice"],
        ["How do I improve my social skills", "Social skills tips", "Becoming more social"],
        ["Can you recommend a good app for meditation", "Meditation app suggestions", "Best apps for meditation"],
        ["What are the best ways to save money on travel", "Travel saving tips", "Budget travel advice"],
        ["How do I plan a successful event", "Event planning tips", "Organizing an event"],
        ["Can you suggest a good book for self-improvement", "Self-improvement book suggestions", "Books for growth"],
        ["What are some fun indoor activities", "Indoor activity ideas", "Things to do indoors"],
        ["How do I improve my cooking skills", "Cooking improvement tips", "Better cooking strategies"],
        ["Can you recommend a good app for learning a new skill", "Skill learning apps", "Best apps for learning"],
        ["What are the best ways to relax on a weekend", "Weekend relaxation tips", "How to unwind"],
        ["How do I plan a romantic evening", "Romantic evening ideas", "Planning a special night"],
        ["Can you suggest a fun way to spend a day off", "Day off activities", "How to spend free time"],
        ["What are the best ways to boost my energy", "Energy boosting tips", "Staying energized"],
        ["How do I improve my relationship with my friends", "Friendship improvement tips", "Strengthening friendships"],
        ["Can you recommend a good TV series", "TV series recommendations", "What to watch"],
        ["What are the best ways to stay productive", "Productivity tips", "Maintaining productivity"],
        ["How do I create a meal plan", "Meal planning tips", "Creating a meal plan"],
        ["What are some good date night ideas", "Date night suggestions", "Romantic date ideas"],
        ["How do I handle financial stress", "Financial stress management", "Dealing with money stress"],
        ["Can you suggest a good app for fitness tracking", "Fitness tracking apps", "Best apps for tracking workouts"],
        ["What are the best ways to improve my sleep quality", "Sleep quality tips", "Better sleep strategies"],
        ["How do I improve my productivity at work", "Work productivity tips", "Becoming more productive"],
        ["Can you recommend a good podcast for relaxation", "Relaxation podcast suggestions", "Best podcasts for unwinding"],
        ["What are some fun family activities", "Family activity ideas", "Things to do with family"],
        ["How do I improve my mental health", "Mental health tips", "Taking care of your mental well-being"],
        ["Can you suggest a good activity for a rainy day", "Rainy day activities", "What to do when it's rainy"]
    
    
  ];
  const botReply = [
    ["bsdk"],
    ["bol bol", "Hi!", "Hey!", "Hi there!"],
    ["Okay"],
    ["Yes I am! "],
    ["I'm sorry about that. But I like you dude."],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    ["Dekh tui amake mon khule sob bolte parish ! Ok?"],
  
    [
      "Tor athe kotha bolchi !Ar ki korbo bol",
      
      "Can you guess?",
      
    ],
    ["I am always young."],
    ["Amake tor bhai bhab" ],
    ["Ritesh"],
    ["Amake tui ja khusi bole dakte parish"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Briyani", "Burger", "Sushi", "Pizza"],
    ["Dude!"],
    ["Yes?"],
    ["Please stay home"],
    ["Glad to hear it"],
    ["Say something interesting"],
    ["Tor bhai jokhon bolche toke moti toh or age ami k bol?"],
    ["Sorry for that. Let's chat!"],
    ["Take some rest, Dude!"],
    
        ["I can help you with that. What specific help do you need?", "I'd be happy to assist. What are you looking for?", "Sure, just let me know what you need help with!"],
        ["Let's go over some basic troubleshooting steps. Can you describe the issue?", "I can guide you through some solutions. What seems to be the problem?", "Describe the problem and I can help you solve it."],
        ["Here are some study tips: make a schedule, take breaks, and practice regularly. Need more help?", "Try these study tips: stay organized, practice active learning, and test yourself.", "Effective study habits include regular reviews, active engagement, and proper rest. Let me know if you need more details!"],
        ["For cooking a turkey, start with preheating the oven, prepare the turkey, and cook it for about 3-4 hours. Need a specific recipe?", "Here’s a basic turkey recipe: season, roast, and let it rest. I can provide a detailed recipe if needed.", "Cooking a turkey involves prepping, seasoning, and roasting. Let me know if you need the full recipe!"],
        ["Consider checking the weather and your calendar. If it’s casual, go for comfort. Need more suggestions?", "Check the weather and plan according to the occasion. Would you like more outfit ideas?", "For outfit choices, consider the weather and event. Let me know if you need more help!"],
        ["Try incorporating more fruits, vegetables, and whole grains into your diet. Interested in a specific meal plan?", "Improving your diet could involve adding more nutrient-rich foods. I can help with a detailed plan if needed.", "Eating healthier includes more balanced meals with fresh ingredients. Need more tips on specific foods?"],
        ["Here’s a workout routine: 30 minutes of cardio, strength training, and flexibility exercises. Need a personalized plan?", "For fitness, try a mix of cardio, strength, and flexibility exercises. Let me know if you need a custom routine!", "A good workout routine includes cardio, strength training, and stretching. Let me know if you need details!"],
        ["Start by tracking your expenses and setting goals. I can help you create a budget plan if you need.", "To plan a budget, track your spending and set limits. Let me know if you need assistance with budgeting.", "Creating a budget involves tracking expenses and setting financial goals. Need help with a specific budget?"],
        ["Use techniques like deep breathing, meditation, or regular exercise to manage stress. Interested in learning more techniques?", "Stress management can include practices like mindfulness and regular exercise. Let me know if you need more tips!", "Try deep breathing, regular exercise, or meditation to manage stress. Need more details on these techniques?"],
        ["Good study habits include regular reviews, active learning, and proper rest. Want more tips?", "Effective study habits involve consistency, practice, and staying organized. Need specific advice on study techniques?", "Regular reviews, active learning, and proper sleep are key to good study habits. Let me know if you need more guidance!"],
        ["For better sleep, try consistent sleep schedules, a relaxing routine, and a comfortable environment. Need more advice?", "Improving sleep involves a consistent schedule and a relaxing environment. Interested in more tips for better sleep?", "Try maintaining a sleep routine and creating a calm environment for better rest. Need more details?"],
        ["Here are some productivity apps: Todoist, Evernote, and Trello. Interested in learning more about these apps?", "Try using apps like Todoist or Evernote to boost your productivity. Let me know if you need more recommendations.", "For productivity, apps like Trello and Evernote can help. Want more information on these tools?"],
        ["Start by setting clear goals, creating a plan, and breaking it down into manageable steps. Need more guidance?", "To start a project, define your goals and break them into steps. Let me know if you need help with the planning.", "Creating a project plan involves setting goals and breaking them into tasks. Interested in more detailed advice?"],
        ["Here are some book suggestions: ‘The Alchemist’ by Paulo Coelho and ‘To Kill a Mockingbird’ by Harper Lee. Want more recommendations?", "Try reading ‘The Alchemist’ or ‘Pride and Prejudice’. Let me know if you need more book ideas.", "Consider books like ‘1984’ by George Orwell or ‘The Great Gatsby’ by F. Scott Fitzgerald. Need more suggestions?"],
        ["To stay motivated, set clear goals, reward yourself, and maintain a positive mindset. Need more tips?", "Keeping motivation high can include setting goals, tracking progress, and celebrating milestones. Want more advice?", "Try setting goals, tracking progress, and rewarding yourself to stay motivated. Need additional tips?"],
        ["Here are some hobbies: gardening, painting, or learning a musical instrument. Interested in trying something new?", "Consider picking up hobbies like painting or playing an instrument. Let me know if you need more ideas.", "Gardening, reading, and cooking are great hobbies to explore. Want more suggestions for hobbies?"],
        ["Improving a relationship often involves communication, quality time, and mutual respect. Want more advice?", "Building strong relationships includes open communication and spending quality time together. Need more tips?", "To strengthen a relationship, focus on communication and quality time. Let me know if you need specific advice!"],
        ["For a date, consider a romantic dinner, a movie night, or a fun activity together. Need more ideas?", "Date ideas include a romantic dinner or a fun outing. Want suggestions for different types of dates?", "Try planning a dinner, a movie, or a unique experience for a date. Let me know if you need more ideas!"],
        ["For resume writing, focus on clear formatting, relevant experience, and strong language. Need specific help?", "Creating a resume involves highlighting experience and skills in a clear format. Let me know if you need assistance.", "To write a strong resume, emphasize your skills and experience clearly. Interested in detailed tips?"],
        ["I can help with your essay by offering structure tips, proofreading, and content suggestions. Need specific assistance?", "For essay writing, I can help with structure, proofreading, and improving your content. Let me know what you need!", "Assistance with essays includes structuring content, proofreading, and enhancing arguments. Need detailed help?"],
        ["Try deep breathing exercises, progressive muscle relaxation, and mindfulness. Need more details on these techniques?", "For relaxation, try techniques like deep breathing or progressive muscle relaxation. Interested in more methods?", "Using methods like deep breathing and progressive muscle relaxation can help you relax. Let me know if you need more advice!"],
        ["Effective time management includes prioritizing tasks, setting deadlines, and avoiding distractions. Need more tips?", "Managing time effectively can involve creating a schedule, setting priorities, and avoiding procrastination. Want more advice?", "To manage your time well, prioritize tasks and set clear deadlines. Interested in more tips on time management?"],
        ["Here are some good self-care practices: regular exercise, adequate sleep, and mindfulness. Need more recommendations?", "For self-care, consider exercise, healthy eating, and mindfulness practices. Want more details on self-care?", "Self-care includes activities like exercise and mindfulness. Let me know if you need more suggestions!"],
        ["Dealing with a difficult boss may include clear communication and setting boundaries. Need more strategies?", "Handling a difficult boss involves effective communication and understanding their expectations. Interested in more tips?", "To deal with a tough boss, focus on communication and managing expectations. Need additional advice?"],
        ["I can help with restaurant suggestions based on your preferences. What type of cuisine are you interested in?", "For restaurant recommendations, let me know your preferences and location. Need help finding a specific type?", "Consider sharing your preferences and location for the best restaurant suggestions. Let me know what you like!"],
        ["Try activities like reading, watching a movie, or taking a walk. Need more ideas for relaxation after work?", "Unwinding after work can include reading, watching TV, or engaging in a hobby. Want more relaxation ideas?", "Consider reading, watching a favorite show, or doing a relaxing activity to unwind after work. Need more suggestions?"],
        ["To improve public speaking, practice regularly, seek feedback, and work on your delivery. Interested in specific tips?", "Improving public speaking includes regular practice and feedback. Let me know if you need more detailed advice.", "Focus on practicing, getting feedback, and enhancing your delivery to improve public speaking. Need more tips?"],
        ["Effective stress management includes techniques like deep breathing and regular exercise. Interested in more strategies?", "For managing stress, consider techniques like mindfulness and regular exercise. Want additional tips?", "Try using deep breathing and regular exercise to manage stress. Need more suggestions on stress relief?"],
        ["Improving productivity at work includes creating a to-do list, setting priorities, and avoiding distractions. Want more advice?", "To boost productivity at work, use techniques like prioritizing tasks and minimizing interruptions. Need additional tips?", "Effective productivity strategies include task lists, prioritization, and reducing distractions. Interested in more details?"],
        ["To plan a romantic evening, consider a special dinner, a movie, or an intimate activity together. Need more ideas?", "Planning a romantic evening can include a special meal, a movie, or a thoughtful gesture. Want more suggestions?", "For a memorable evening, plan a romantic dinner or a cozy movie night. Let me know if you need more ideas!"],
        ["Try journaling, meditation, or talking to a therapist to manage stress. Need more strategies for managing stress?", "Managing stress effectively can include techniques like meditation and professional counseling. Interested in learning more?", "Consider journaling, meditation, or therapy to manage stress better. Want more detailed tips?"],
        ["Improving interpersonal skills involves communication, empathy, and active listening. Need specific tips?", "Developing interpersonal skills includes practicing communication and empathy. Interested in detailed advice?", "To enhance interpersonal skills, focus on clear communication and understanding others. Need more help?"],
        ["Good habits for studying include setting specific goals, maintaining a regular schedule, and practicing active learning. Want more study tips?", "Effective study habits involve goal setting, regular schedules, and active engagement. Let me know if you need additional advice.", "Studying effectively means having clear goals and a consistent routine. Need more study techniques?"],
        ["To handle job stress, try setting clear boundaries, taking breaks, and practicing relaxation techniques. Need more strategies?", "Managing job stress involves setting boundaries and taking time for yourself. Want additional tips?", "Effective ways to manage job stress include setting limits and using relaxation techniques. Need more advice?"],
        ["Consider hobbies like painting, gardening, or playing an instrument to find joy. Need more hobby suggestions?", "Finding new hobbies such as painting or gardening can bring enjoyment. Interested in additional hobby ideas?", "Engaging in activities like painting or gardening can be fulfilling. Want more suggestions for hobbies?"],
        ["Improving time management includes setting goals, creating schedules, and prioritizing tasks. Need more tips?", "Effective time management involves planning, setting priorities, and sticking to a schedule. Interested in more detailed advice?", "To manage time better, try setting clear goals and making a schedule. Need additional time management tips?"],
        ["For a successful date, consider a planned activity, good communication, and creating a pleasant atmosphere. Need more date ideas?", "Planning a successful date involves selecting activities and ensuring good communication. Want more suggestions?", "Successful dates include thoughtful planning and creating a pleasant experience. Need additional ideas?"],
        ["Managing work-life balance involves setting boundaries, prioritizing tasks, and making time for yourself. Need more strategies?", "To balance work and personal life, set clear boundaries and prioritize your time. Interested in more tips?", "Effective work-life balance includes setting boundaries and finding time for yourself. Want more advice?"],
        ["A good resume should highlight your skills, experience, and achievements in a clear format. Need help with your resume?", "To create a strong resume, focus on clearly presenting your skills and experience. Interested in detailed tips?", "Highlight your skills and experience clearly on your resume. Need more specific assistance?"],
        ["To improve a relationship, focus on communication, empathy, and spending quality time together. Need more advice?", "Building a stronger relationship involves good communication and empathy. Want more tips on improving relationships?", "Strengthening a relationship includes open communication and quality time. Need additional advice?"],
        ["For better sleep, try establishing a routine, avoiding screens before bed, and creating a comfortable environment. Need more tips?", "Improving sleep can include maintaining a consistent routine and a relaxing environment. Interested in more sleep tips?", "To get better sleep, set a routine and make your sleep environment comfortable. Need additional suggestions?"]
    
    
  ];
  
  const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening..."
  ];
  
  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    
  }