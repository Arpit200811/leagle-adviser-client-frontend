import { HiCheckCircle, HiOutlineBriefcase, HiStar, HiOutlineGlobeAlt, HiOutlineShare, HiOutlineHeart } from 'react-icons/hi';

const ProfileHeader = ({ lawyer }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-5">
            <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative shrink-0">
                    <div
                        className="bg-center bg-no-repeat bg-cover rounded-xl h-32 w-32 shadow-inner"
                        style={{ backgroundImage: `url("${lawyer.image}")` }}
                    ></div>
                    {lawyer.online && (
                        <div className="absolute -bottom-2 -right-2 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full w-5 h-5 shadow-sm" title="Online Now"></div>
                    )}
                </div>
                <div className="flex flex-col justify-center flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">{lawyer.name}</h1>
                        <HiCheckCircle className="text-primary text-[20px]" title="Verified Attorney" />
                    </div>
                    <p className="text-slate-500 dark:text-slate-300 text-base font-normal mb-2">{lawyer.headline}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1"><HiOutlineBriefcase className="text-lg" /> {lawyer.experience} Experience</span>
                        <span className="flex items-center gap-1 text-yellow-500 font-bold"><HiStar className="text-lg" /> {lawyer.rating} ({lawyer.reviews} Reviews)</span>
                        <span className="flex items-center gap-1"><HiOutlineGlobeAlt className="text-lg" /> {lawyer.languages.join(', ')}</span>
                    </div>
                </div>
                <div className="flex sm:flex-col gap-3 justify-center sm:w-auto w-full mt-4 sm:mt-0">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        <HiOutlineShare className="text-lg" />
                        <span className="hidden sm:inline">Share</span>
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        <HiOutlineHeart className="text-lg" />
                        <span className="hidden sm:inline">Save</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
