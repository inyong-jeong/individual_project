import React from "react";
import "../assets/styles/cardprofile.css";

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img for="photo-upload" src={src} alt="img_upload" />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>
);

const Name = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="name">이름:</label>
    <input
      id="name"
      type="text"
      onChange={onChange}
      maxlength="25"
      value={value}
      placeholder="정인용"
      required
    />
  </div>
);

const Status = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="status">직업:</label>
    <input
      id="status"
      type="text"
      onChange={onChange}
      maxLength="35"
      value={value}
      placeholder="웹개발자"
      required
    />
  </div>
);

const Profile = ({ onSubmit, src, name, status }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>프로필</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap">
          <img for="photo-upload" src={src} />
        </div>
      </label>
      <div className="name">{name}</div>
      <div className="status">{status}</div>
      <button type="submit" className="edit">
        프로필 수정{" "}
      </button>
    </form>
  </div>
);

const Edit = ({ onSubmit, children }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>프로필</h1>
      {children}
      <button type="submit" className="save">
        저장{" "}
      </button>
    </form>
  </div>
);

class CardProfile extends React.Component {
  state = {
    file: "",
    imagePreviewUrl:
      "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
    name: "",
    status: "",
    active: "edit",
  };

  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  editName = (e) => {
    const name = e.target.value;
    this.setState({
      name,
    });
  };

  editStatus = (e) => {
    const status = e.target.value;
    this.setState({
      status,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let activeP = this.state.active === "edit" ? "profile" : "edit";
    this.setState({
      active: activeP,
    });
  };

  render() {
    const { imagePreviewUrl, name, status, active } = this.state;
    return (
      <div className="card-profile">
        {active === "edit" ? (
          <Edit onSubmit={this.handleSubmit}>
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
            <Name onChange={this.editName} value={name} />
            <Status onChange={this.editStatus} value={status} />
          </Edit>
        ) : (
          <Profile
            onSubmit={this.handleSubmit}
            src={imagePreviewUrl}
            name={name}
            status={status}
          />
        )}
      </div>
    );
  }
}

export default CardProfile;

// ReactDOM.render(<CardProfile />, document.getElementById("root"));
