export const currentRoute = () =>{
    const url = window.location.href.split('/');
    const derivedRouteName = url[url.length - 1];

    return derivedRouteName;
}