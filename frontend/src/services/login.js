export const isLoggedIn = (props) => {
    const { location } = props;
    const user = localStorage.getItem('user');
    if (!user) {
        login();
    }
    console.log(user);
    console.log(location);
    return true;
}

const login = () => {
    console.log("calling teamy...");
    return;
}