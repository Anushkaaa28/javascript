
//.....................reversestringg............................................
const reversestringg = () => {

    str = document.getElementById('input').value;
    console.log(str);

    let r = ' ';
    for (i = str.length - 1; i >= 0; i--) {
        r += str[i];
    }
    console.log(r)
    document.getElementById('output').innerHTML = r;
}

//.........................vowels..............................................
const vowels = () => {
    str = document.getElementById('input').value;
    console.log(str);

    let v = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 1; i <= str.length; i++) {
        if (v.includes(str[i])) {
            count += 1;
        }
    }
    console.log(count)
    document.getElementById('output').innerHTML = count;
}

//..............................consonant........................................
const consonant = () => {
    str = document.getElementById('input').value;
    console.log(str);

    let v = ['a', 'e', 'i', 'o', 'u', ' '];
    let count = 0;

    for (let i = 1; i <= str.length; i++) {
        if (!v.includes(str[i])) {
            count += 1;
        }
    }
    console.log(count)
    document.getElementById('output').innerHTML = count;
}


//.............................UpperCase......................................
const UpperCase = () => {
    str = document.getElementById('input').value;
    console.log(str);

    Output = str.toUpperCase();

    console.log(Output)
    document.getElementById('output').innerHTML = Output;
}


//................................LowerCase................................
const LowerCase = () => {
    str = document.getElementById('input').value;
    console.log(str);

    Output = str.toLowerCase();

    console.log(Output)
    document.getElementById('output').innerHTML = Output;
}


//.................................Camal case..........................................





//....................................countWords.....................................
const countWords = () => {
    str = document.getElementById('input').value;
    console.log(str);
    let count = 1;

    if (str == '') {
        count = 0;
    }
    else {
        for (let i = 1; i <= str.length; i++) {
            if (str[i] == ' ') {
                count += 1;
            }
        }
    }
    console.log(count);
    document.getElementById('output').innerHTML = count;
}


//......................Most Frequent character............................
const FrequentCharacter = () => { ////Type here
    str = document.getElementById('input').value;
    strNoSpace = str.replaceAll(' ', '')
    
    splitStr = strNoSpace.split('');
    console.log(splitStr);

    SortedStr = splitStr.sort();
    console.log(SortedStr);

    len = strNoSpace.length;
    count = 0;
    tempCount = 0;

    for(i = 0; i < len; i++){
        for(j = 0; j < i; j++){
            if(SortedStr[i] == SortedStr[j])
            tempCount ++;
        }
    }
        if(tempCount > count){
            count = tempCount;
            tempCount = 0;
    }

    console.log(count);
    document.getElementById('output').innerHTML = count;
}



//..........................Longest Word............................
let LongestWord = () => {
    string = document.getElementById('input').value; // the the word is an
    let word = string.split(" ");
    let longest_length = 0;
    let longest_word;
    for (let i = 0; i < word.length; i++) {
        if (longest_length < word[i].length) {
            longest_length = word[i].length;
            longest_word = word[i];
        }
    }
    Output = longest_word;

    console.log(Output)
    document.getElementById('output').innerHTML = Output;
}


//............................Anagrams................................

const Anagrams = () =>{
    str = document.getElementById('input').value;
    words = str.split(' ');

    w1 = words[0];
    w2 = words[1];

    // charOfFirstWord = w1.split('');
    // charOfSecondWord = w2.split('');

    sortedFirstWord = w1.sort();
    sortedSecondWord = w2.sort();

    console.log(sortedFirstWord);
    console.log(sortedSecondWord);

    if(sortedFirstWord == sortedSecondWord){
        Output = "Yess Anagrams " +sortedFirstWord
    }
    else{
        Output = "Not anagrams"
    }
    
    console.log(Output)
    document.getElementById('output').innerHTML = Output;
}








