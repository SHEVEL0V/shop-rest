/** @format */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetProductsByIdQuery,
  useUpdateProductsMutation,
  useAddProductsMutation,
} from "../../services/fetch";
import FormMain from "../../components/admin/formMain";
import FormAddOpt from "../../components/admin/formAddOpt";
import UploadImg from "../../components/admin/uploadImg";
import Btn from "../../UI/btn";
import Autocomplete from "../../UI/autocomplete";
import picture from "../../assets/img.png";
import Text from "../../UI/text";
import { renderInfo } from "../../redux/info/slice";

import s from "./style.module.css";

export default function UpdateProducts({ boolean }) {
  const [file, setFile] = useState(false);
  const [form, setForm] = useState({});
  const [urlImg, setUrlImg] = useState(picture);
  const desc = useSelector((store) => store.options.desc);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formData = new FormData();
  const disabled = Object.values(form).length > 3;
  const value = boolean ? "Update" : "Add";

  const { data, isSuccess } = useGetProductsByIdQuery(id, { skip: !boolean });
  const [updateProducts] = useUpdateProductsMutation(id);
  const [addProduct, { isLoading }] = useAddProductsMutation();

  useEffect(() => {
    if (!boolean) {
      setForm({});
      setUrlImg(picture);
    }
    if (boolean && isSuccess) {
      setForm(data);
      setUrlImg(data.img);
    }
  }, [boolean, data, isSuccess]);

  const handleAddProducts = () =>
    addProduct(formData)
      .unwrap()
      .then(() => {
        setForm({});
        setUrlImg(picture);
        dispatch(renderInfo("success add product"));
      });

  const handleUpdateProduct = () =>
    updateProducts({ id, body: formData })
      .unwrap()
      .then(() => {
        setTimeout(() => navigate(-1), 2000);
        dispatch(renderInfo("success update product"));
      });

  const handlerFetch = () => {
    if (file) {
      formData.append("img", file);
    }
    Object.keys(form).map((key) =>
      key === "options"
        ? formData.append(key, JSON.stringify(form.options))
        : formData.append(key, form[key])
    );

    boolean ? handleUpdateProduct(formData) : handleAddProducts(formData);
  };

  const handleSetForm = (value) => setForm((state) => ({ ...state, ...value }));

  return (
    <div className={s.container}>
      <div style={{ display: "flex", width: "100%" }}>
        <UploadImg setFile={setFile} urlImg={urlImg} setUrlImg={setUrlImg} />
        <div style={{ width: "100%" }}>
          <Autocomplete
            options={desc?.type}
            name="type"
            onChange={(_, v) => handleSetForm({ type: v })}
            value={form.type || ""}
          />
          <Autocomplete
            options={desc?.brand}
            name="brand"
            onChange={(_, v) => handleSetForm({ brand: v })}
            value={form.brand || ""}
          />
          <FormMain
            data={form}
            form={["name", "price", "desc"]}
            setForm={setForm}
          />
        </div>
      </div>
      <FormAddOpt form={form} setForm={setForm} params={desc?.params} />
      <div className={s.buttonContainer}>
        <div style={{ width: "200px" }}>
          <Text>{value} product card</Text>
        </div>
        <Btn loading={isLoading} onClick={handlerFetch} disabled={!disabled}>
          {value}
        </Btn>
      </div>
    </div>
  );
}
