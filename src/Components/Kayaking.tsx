import kajak from '../assets/kajak.jpg';

export default function Kayaking() {
    return (
        <article className="max-w-xl mx-auto">
            <img src={kajak} alt="Kayaking" className="" />
            <div>
                <h2 className="my-4 font-bold text-3xl">Sea Kayaking</h2>
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Optio, est quaerat. Voluptates consectetur totam pariatur 
                    architecto facere repellendus iusto quibusdam. Accusamus id 
                    in tempore numquam quo, laudantium voluptate obcaecati quos.
                </p>
            </div>
        </article>
    )
}