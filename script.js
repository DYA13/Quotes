const button=document.querySelector("#btn");
const par=document.querySelector("#par");

const quotes=[
    "“If you can't explain it to a six year old, you don't understand it yourself.”",
    "“If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.”",
    "“Logic will get you from A to Z; imagination will get you everywhere.”",
    "“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
    "“Anyone who has never made a mistake has never tried anything new.”",
    "“I have no special talents. I am only passionately curious.”",
    "“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”",
    "“You never fail until you stop trying.”",
    "“The measure of intelligence is the ability to change.”",
    "“Creativity is intelligence having fun.”",
    "“The best way to cheer yourself is to cheer somebody else up.”",
    "“Whoever is careless with the truth in small matters cannot be trusted with important matters”",
    "“Peace cannot be kept by force; it can only be achieved by understanding.”",
    "“In the middle of difficulty lies opportunity”",
    "“The pursuit of truth and beauty is a sphere of activity in which we are permitted to remain children all our lives.”",
    "“The important thing is not to stop questioning. Curiosity has its own reason for existing.”",
    "“We dance for laughter, we dance for tears, we dance for madness, we dance for fears, we dance for hopes, we dance for screams, we are the dancers, we create the dreams.”",
    "“The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has ever been before.”",
    "“Time is an illusion.”",
    "“Genius is 1% talent and 99% percent hard work...”",
    "“Nothing happens until something moves.”",
    "“I'd rather be an optimist and a fool than a pessimist and right.”",
    "“If you want to live a happy life, tie it to a goal, not to people or things.”",
    "“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.”",
    "“The more I learn, the more I realize how much I don't know",
]

button.addEventListener("click", ()=>{
    let randomQuote= quotes[Math.floor(Math.random()*quotes.length)];
    par.style.display="block";
 par.textContent=randomQuote;
})
