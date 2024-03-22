import toast from 'react-hot-toast';

const Alert = (type, message) => {
    switch (type) {
        case "error":
            toast.error(message);
            break;
        case "success":
            toast.success(message);
            break;
        default:
            toast(message);
            break;
    }
}

export default Alert;