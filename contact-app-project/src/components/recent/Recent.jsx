import RecentContact from "./RecentContact"
function Recent(props){
    // eslint-disable-next-line react/prop-types
    const data = props.data
    const revDATA = [...data].reverse().slice(0,3);
    return(
        <ul className="container mb-2 mt-2 list-group">
            <li className="list-group-item active row">recently called</li>
            {revDATA.map((data,i)=>{
                return <RecentContact key={i} id={i} data={data}></RecentContact>
            })}
        </ul>    
    )
}
export default Recent