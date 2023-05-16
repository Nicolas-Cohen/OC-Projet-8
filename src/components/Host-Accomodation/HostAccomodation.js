import './HostAccomodationStyle.css'

function HostAccomodation({ host }) {

    return (
        <div className="host-profil">
        <p className="name">{host.name}</p>
        <img className="photo" src={host.picture} alt="Photo du profil" />
        </div>
    );
}

export default HostAccomodation;

