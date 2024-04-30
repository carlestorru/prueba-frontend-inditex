export default function Card({ children }) {
    return (
        <div className='bg-white shadow-[0_3px_10px_rgb(0,0,0,0.3)] p-2'>
            {children}
        </div>
    )
}