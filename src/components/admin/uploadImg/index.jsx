/** @format */

import Button from "@mui/material/Button";

import s from "./style.module.css";

export default function UploadImg({ setFile, urlImg, setUrlImg }) {
  const hendleInputFile = async (e) => {
    const file = e.target.files[0];
    setUrlImg(URL.createObjectURL(file));
    setFile(file);
  };

  return (
    <div className={s.upload}>
      <img className={s.img} src={urlImg} alt="produkt"></img>
      <Button variant="contained" component="label">
        Upload
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={hendleInputFile}
        />
      </Button>
    </div>
  );
}
