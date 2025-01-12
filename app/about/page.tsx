export default function About(){
    return(
        <div className="bg-blue-100 h-screen">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <h1 className="font-bold text-3xl font-serif text-center my-4">About Page</h1>
            <p className="text-center">Here you can see details about us</p>
        </div>

    )
}