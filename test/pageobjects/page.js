module.exports = class Page {

    open(path){
        return browser.url(`https://www-staging.wongatest.pl/${path}`)
    }
}