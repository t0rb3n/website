export default function Container(props){
    const { children } = props;

    return (
        <div>

            <main
                id="skip"
                className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
            >
                {children}
            </main>
        </div>
    )
}
