const fs = require('fs');
const path = require('path');


const functionForCreate = (paths, number) => {
    fs.mkdirSync(paths);//stexcenkky glxavor papken

    let himnakanPath = paths;

    for (let i = 1; i <=number; i++) {

        const folderName = `folder${i}`; //papkeki anunneri hamar or exni orinak folder1, folder2...

        himnakanPath = path.join(himnakanPath, folderName); //champen chisht cuyc talu hamar

        if (!fs.existsSync(himnakanPath)) {//stugenkky ka ed papken te che

            fs.mkdirSync(himnakanPath);//ete chka sarqenkky
        } else {
            console.log(`folder ${himnakanPath} is already created`);
        }
    }

    const filePath = path.join(himnakanPath, 'hello.js');
    fs.writeFileSync(filePath, 'let a = "An TeamLead jan ush eka ydur hamar ush exav"; \n console.log(a)')

}

functionForCreate('ParentFolder', 5);


// const functionForRemove = (dirPath) => {
//
//     if (fs.existsSync(dirPath)) {// stugenqky enq ka te che papken GLXAVOR
//
//         const files = fs.readdirSync(dirPath);// Kstananq sax papkeki u fayleri canky metody kuda mezi ed informacyan zangvacov
//
//         files.forEach(file => {// Kancninq sax faylerin vrayov u jnjenkky iranc
//             const filePath = path.join(dirPath, file);//kudanq chanaparhy glxavor fayli
//
//             if (fs.statSync(filePath).isDirectory()) { //Kstugenq stat metodov vory cuyc statisikan filePath -i u kstugenq ete papka e
//                 functionForRemove(filePath);  // rekursyaov kkanchenq henc iran u kjnjenq
//             } else {
//                 fs.unlinkSync(filePath);//Ete fayle kjnjenq file
//             }
//         });
//
//         fs.rmdirSync(dirPath);//Sax faylern u papkeky jnjeluc het kjnjenq hen GLXAVOR papken arden isk datark vijakum
//     } else {
//         console.log(`${dirPath} dont living there)))`);
//     }
// };
//
// functionForRemove('ParentFolder');



