function saturdayFun(activty = "roller-skate") {
    return `This Saturday, I want to ${activty}!`;
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(wrapper = "*") {
    return function(adjective = "special")
    { return `You are ${wrapper}${adjective}${wrapper}!`};
}
