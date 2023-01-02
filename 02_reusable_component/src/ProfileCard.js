// function ProfileCard(props) {
//     // const title = props.title;
//     // const handle = props.handle;
//     const { title, handle } = props
//     return (
//         <div>
//             <div> Title is {title} </div>
//             <div> Handle is {handle} </div>
//         </div>
//     );
// }

// // Destructuring props object
// function ProfileCard({ title, handle, image }) {
//     return (
//         <div>
//             <img src={image} alt="PDA Logo" />
//             <div> Title is {title} </div>
//             <div> Handle is {handle} </div>
//         </div>
//     );
// }

function ProfileCard({ title, handle, image, description }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;