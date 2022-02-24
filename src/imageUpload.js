import React, { useState } from "react";
export const ImageUpload = () => {
  const [imagedata, setImagedata] = useState([]);
  const [imagepaths, setImagepaths] = useState([]);

  const onChange = (e) => {
    let { name } = e.target;
    let { files } = e.target;
    if (name === "files") {
      let data = [];
      let im = [];
      for (let i = 0; i < files.length; i++) {
        let impath = URL.createObjectURL(files[i]);
        im.push(impath);
        data.push(files[i]);
      }
      setFunction(im, data);
    }
  };

  const setFunction = (im, data) => {
    setImagepaths([...imagepaths, ...im]);
    setImagedata([...imagedata, ...data]);
  };
  console.log("image<<<<<<<<<<<<<<<<<<<<<<", imagedata);
  console.log("image>>>>>>>>>>>>>>>>>>>>>", imagepaths);

  const onRemove = (i) => {
    let paths = [...imagepaths];
    let data = [...imagedata];
    paths.splice(i, 1);
    data.splice(i, 1);
    setImagepaths(paths);
    setImagedata(data);
  };

  return (
    <div>
      image
      <div className="addticket-form-row">
        <div className="editmachinestatus-form-site form">
          <label> Upload Images</label>
          <input
            type="file"
            multiple={true}
            name="files"
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>
      {imagepaths &&
        imagepaths.map((image, index) => (
          <div key={index}>
            <div
              style={{
                position: "relative",
                width: 200,
                overflow: "hidden",
                objectFit: "fill",
              }}
            >
              <img height="100" src={image} />
              <button
                style={{
                  color: "red",
                  position: "absolute",
                  top: 5,
                  right: 5,
                  cursor: "pointer",
                }}
                onClick={() => onRemove(index)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
