const ButtonHeader = ({title, onClick, className, disabled}) => {

    return (
        <button
            className={`${className} p-2 bg-blue-500 text-white rounded-lg hover:text-gray-200 active:bg-blue-500 focus:outline-none`}
            onClick={onClick}
            disabled={disabled}
        >
            {title} 
        </button>
    )
}

export default ButtonHeader
