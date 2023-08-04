const dataaa = document.querySelector('.data');

function generateCombination() {
    var characters = "abcdef0123456789";
    var combination = "";
    var combination2 = "";
    var deg = Math.floor(Math.random() * 360);

    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        var randomIndex2 = Math.floor(Math.random() * characters.length);
        combination += characters.charAt(randomIndex);
        combination2 += characters.charAt(randomIndex2);
    }

    dataaa.style.color = '#000';
    document.body.style.background = `linear-gradient(${deg}deg, #${combination}, #${combination2})`;
    dataaa.innerHTML = `Background: <span>linear-gradient(${deg}deg, #${combination}, #${combination2}) </span>characters <br>Nusxalash uchun bosing`;
}

function copyToClipboard() {
    var text = document.querySelector('span').innerHTML;
    let dat = dataaa.innerHTML;



    navigator.clipboard.writeText(text).then(function () {
        dataaa.innerHTML = 'Background muvaffaqqiyatli nusxalandi!';
        dataaa.style.color = 'rgb(0, 0, 0)';

        setTimeout(function () {
            if (dat === 'Background muvaffaqqiyatli nusxalandi!') {
                dataaa.innerHTML = '';
            }
        }, 3000);
    }, function (err) {
        console.error('XATO!!!:', err);
    });
}

const body = document.querySelector('body');
body.style.minHeight = '100vh';
body.style.overflow = 'hidden';
body.style.userSelect = 'none';
body.style.background = 'linear-gradient(232deg, #161869, #10f349)';
body.style.boxSizing = 'border-box';
body.style.margin = '0';
body.style.padding = '0';


const p = document.querySelector('p');
p.style.position = 'absolute';
p.style.bottom = '0';
p.style.fontWeight = '700';
p.style.textAlign = 'center';
p.style.letterSpacing = '1px';
p.style.margin = '15px 0 0 0';
p.style.padding = '0 0 10px 0';


const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.width = '300px';
container.style.height = '200px';
container.style.position = 'absolute';
container.style.top = '50%';
container.style.left = '50%';
container.style.transform = 'translate(-50%, -50%)';

const dol = document.querySelector('.dol');
dol.style.width = '180px';
dol.style.height = '40px';
dol.style.border = 'none';
dol.style.position = 'relative';
dol.style.background = 'transparent';
dol.style.display = 'flex';
dol.style.alignItems = 'center';
dol.style.overflow = 'hidden';
dol.style.justifyContent = 'center';
dol.style.borderRadius = '20px';
dol.style.color = '#fff';
dol.style.fontWeight = '700';
dol.style.zIndex = '100';