const defaultTitle = "Press the Button below.";
let mangaTitle = defaultTitle;

let copyButtonText = "Copy";

{//読み込まれる時に実行

    setInterval(function () {
        let comicTitleEle = document.getElementById("comicTitle");
        comicTitleEle.innerHTML = mangaTitle;
        if(mangaTitle != defaultTitle && mangaTitle.length > 15){
            comicTitleEle.style.fontSize = "2.5em";
        }else{
            comicTitleEle.style.fontSize = "5em";
        }
    }, 0);

    setInterval(function(){
        if(mangaTitle == defaultTitle){
            document.getElementById("copyButtonDiv").style.visibility = "hidden";
        }else{
            document.getElementById("copyButtonDiv").style.visibility = "visible";
        }
    },10);

    setInterval(function(){
        document.getElementById("copyButtonText").innerHTML = copyButtonText;
    },0)

}

function changeComicTitle() {
    const mangaTitlesListFixed = removeDuplicates_(mangaTitlesList);
    mangaTitle = getRandomElement_(mangaTitlesListFixed);
    copyButtonText = "Copy";
}

function copyTitle() {
    navigator.clipboard.writeText(mangaTitle);
    copyButtonText = "Copied!";
    setTimeout(function(){
        copyButtonText = "Copy";
    },2500);
}