//VARIABLES DEL SISTEMA

var URL_IMG = "img/", URL_IMG_SKINS = URL_IMG + "skins/";
var WIDTH_VEHICULOS_PERFIL = 350;
var FECHA_ACTUAL = new Date(), TITULO_MAIN_APP = "", APP = "", IMG_LOGO = URL_IMG + "logo_kradac.PNG";
//ZONA HORARIA DE ECUADOR POR DEFECTO
var ZONA_HORARIA = (parseInt(FECHA_ACTUAL.toString().substr(28, 3)) === undefined || parseInt(FECHA_ACTUAL.toString().substr(28, 3)) === NaN) ? -5 : parseInt(FECHA_ACTUAL.toString().substr(28, 3));
var WIDTH_NAVEGACION = 215, HEIGT_VIEWS = 0, WIDTH_VIEWS = 0;
if (document.body) {
    WIDTH_VIEWS = (document.body.clientWidth);
    HEIGT_VIEWS = (document.body.clientHeight);
} else {
    WIDTH_VIEWS = (window.innerWidth);
    HEIGT_VIEWS = (window.innerHeight);
}
HEIGT_VIEWS = HEIGT_VIEWS - 65;
/*====VARIABLES IMPORTANTES====*/
var COLOR_SISTEMA = '#5ecac2';
var COLOR_SISTEMA2 = '#074975';
var COLOR_BOTONES_GRIS = '#606060';
var COLOR_TABLA_RASTREO = '#407395';