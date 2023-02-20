import cycling from '../assets/cycling.jpg'

export default function Cycling() {
    return (
        <article className="max-w-xl mx-auto my-20">
        <img src={cycling} alt="cycling" className="" />
        <div>
            <h2 className="my-4 font-bold text-3xl">Cycling</h2>
            <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Optio, est quaerat. Voluptates consectetur totam pariatur 
                architecto facere repellendus iusto quibusdam. Accusamus id 
                in tempore numquam quo, laudantium voluptate obcaecati quos.
            </p>
        </div>
    </article>
    )
}