import { FC, FormEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

import { UserType } from "@/utils/types/user";
import { Input, TextArea } from "@/components/Input";
import Layout from "@/components/Layout";
import { Button, ButtonGreen, ButtonRed } from "@/components/Button";
import Swal from "@/utils/swal";
import { CardDetail } from "@/components/Card";

interface StateType {
  data: Partial<UserType>;
  loading: boolean;
  isEdit: boolean;
  image: string;
  objSubmit: Partial<UserType>;
}

interface DataNotPartial {
  content: string;
  description: string;
  priority: number;
  id: string;
}

const Detailed: FC = () => {
  const [objSubmit, setObjSubmit] = useState<Partial<UserType>>({});
  const [data, setData] = useState<DataNotPartial>({
    content: "",
    description: "",
    priority: 0,
    id: "",
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const params = useParams();
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  let tokenStr = "16a40729d3574ceb9a23362c95e59b5bb977c0c2";

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const { detail: id } = params;
    axios
      .get(`tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenStr}`,
        },
      })
      .then((response) => {
        const { data } = response;
        document.title = `${data.content}`;
        setData(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  function handleChange(value: string | File, key: keyof typeof objSubmit) {
    let temp: any = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { detail: id } = params;
    const formData: any = new FormData();
    let key: keyof typeof objSubmit;
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    axios
      .post(`tasks/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${tokenStr}`,
        },
      })
      .then((response) => {
        const { message } = response.data;
        MySwal.fire({
          title: "Success",
          text: message,
          icon: "success",
          showCancelButton: false,
        });
        setObjSubmit({});
        setIsEdit(false);
      })
      .catch((error) => {
        const { data } = error.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
          icon: "error",
        });
      })
      .finally(() => fetchData());
  }

  const handleDelete = () => {
    const { detail: id } = params;
    axios
      .delete(`tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${tokenStr}`,
        },
      })
      .then((response) => {
        const { message } = response.data;
        MySwal.fire({
          title: "Delete task",
          text: "Are you sure?",
          icon: "warning",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      })
      .catch((error) => {
        const { data } = error.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
          icon: "error",
        });
      });
  };

  return (
    <Layout>
      <div className="w-[70%] h-[90%] md:h-[80%] ">
        <div className="flex flex-col gap-4 mb-7 w-full h-min">
          <p className=" text-xl text-slate-900 dark:text-slate-200 font-bold tracking-wider">
            Task Detail:
          </p>
          {isEdit ? (
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="flex flex-col gap-3 w-full h-full">
                <div className="flex flex-col md:flex-row gap-2">
                  <Input
                    placeholder="Your Todo"
                    id="input-content"
                    defaultValue={data.content}
                    onChange={(event) =>
                      handleChange(event.target.value, "content")
                    }
                  />
                  <Input
                    placeholder="(type 1 to make it completed, ignore if not yet done)"
                    id="input-content"
                    onChange={(event) =>
                      handleChange(event.target.value, "priority")
                    }
                  />
                </div>
                <TextArea
                  placeholder="your description here"
                  id="input-description"
                  defaultValue={data.description}
                  onChange={(event) =>
                    handleChange(event.target.value, "description")
                  }
                />
                <div className="flex gap-4">
                  <Button label="Submit" id="button-submit" type="submit" />
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center w-full ">
              <CardDetail
                content={data.content}
                description={data.description}
                priority={data.priority}
                id={data.id}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row w-full gap-2">
          <ButtonGreen
            label="Back to home"
            id="nav-home"
            onClick={() => navigate("/")}
          />

          <Button
            label="Edit Task"
            id="button-edit"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          />

          <ButtonRed
            label="Delete Task"
            id="button-delete"
            onClick={() => handleDelete()}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Detailed;
