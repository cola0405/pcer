let baseurl = '';

if(process.env.NODE_ENV === 'development'){
    baseurl = ''
}else{
    baseurl = '//elm.cangdu.org';
}

export {
    baseurl
}