import './JoinWhatsApp.css';

function JoinWhatsApp() {
  const groupLink = "https://chat.whatsapp.com/G18aobm8D2a4feqEJhXSbv";

  return (
    <div className="join-container">
      <div className="join-box">
        <h2 className="join-heading">Join Our WhatsApp Group</h2>
        <a
          href={groupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="join-button"
        >
          🚀 Click here to join
        </a>
      </div>
    </div>
  );
}

export default JoinWhatsApp;
