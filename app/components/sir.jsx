import { Link } from 'react-router-dom';
export default function() {
    return (
        <div text-center>
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2">
                <div className="mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black">
                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-black dark:text-white">TRAINING</h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Equiping employees with Valuable Skills and Knowledge
                        </p>
                       <Link to="/training" className="inline-block rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#d64545] transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] focus:bg-red-700 focus:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] dark:shadow-[0_4px_9px_-4px_rgba(214, 69, 69, 0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)]">
                            Book Training
                       </Link>
                    </div>
                </div>

                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black">
                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-black dark:text-white">CONSULTANCY</h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                        <Link to="/consultation" className="inline-block rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#d64545] transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] focus:bg-red-700 focus:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.3),0_4px_18px_0_rgba(214, 69, 69, 0.2)] dark:shadow-[0_4px_9px_-4px_rgba(214, 69, 69, 0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(214, 69, 69, 0.2),0_4px_18px_0_rgba(214, 69, 69, 0.1)]">
                            Book Consultancy
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
