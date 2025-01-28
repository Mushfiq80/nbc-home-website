// import Image from 'https://i.ibb.co.com/y5rJ929/pana.png'

const InfoSubmit = () => {
    return (
        <div className="mt-10 flex flex-col-reverse md:flex-row gap-14 justify-evenly items-center md:py-8 lg:py-16 md:px-16 lg:px-32">
            <div className="w-full">
                <img className="w-full lg:w-2/3" src="https://i.ibb.co.com/y5rJ929/pana.png" alt="" />
            </div>
            <div className="space-y-6">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">How to Submit Your Book Information</h1>

                <p className="text-gray-600">Our platform makes it simple for publishers and authors to upload and showcase their book details. Join the growing community of publishers contributing to a comprehensive literary archive.</p>

                <ul className="list-disc pl-5 text-gray-600">
                    <li>Sign Up or Log In
                    Create an account to get started.</li>
                    <li>Upload Your Book Details <br />Add titles, descriptions, and publication info.</li>
                    <li>Reach Readers Nationwide <br />Showcase your works to an extensive audience.</li>
                </ul>

                <button className="btn bg-green-600 py-3 ml-2 px-7 rounded-sm text-white border-none">Learn More</button>
            
            </div>
        </div>
    );
};

export default InfoSubmit;