const Form = () => {
    return (
            <div className=" mx-auto w-full items-center py-2 bg-fixed bg-[url('/contact.jpg')] h-[60vh] bg-no-repeat bg-cover relative pt-[50px]" id="aloqa">
                <div className="bg-white p-8 rounded-lg shadow-lg w-[300px] md:w-[450px] m-auto static items-center mt-[70px] ">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Остались вопросы?</h2>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
                        et, lectus sit lorem id integer.
                    </p>
                    <form className="m-auto">
                        <div className="mb-4">
                            <input
                                type="text"
                                required
                                placeholder="Имя"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                required
                                placeholder="Номер телефона"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
    )
}

export default Form
