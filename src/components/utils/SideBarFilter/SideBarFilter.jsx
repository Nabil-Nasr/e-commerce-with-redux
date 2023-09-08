import { useMemo, useRef, useState } from "react";
import { Button, Col, Form, Offcanvas, Row } from "react-bootstrap";
import "./SideBarFilter.css";
import useGetWithParams from "../../../hooks/useGetWithParams";
import { getAllBrands } from "../../../redux/actions/brandActions";
import { customInputFields } from "../../../utils/itemRequestQueries";
import { getAllCategories } from "../../../redux/actions/categoryActions";
import { useSearchParams } from "react-router-dom";

const SideBarFilter = ({ children, expandMinWidth }) => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [show, setShow] = useState(false);

  const getParams = (...paramsList) => {
    const params = {};
    paramsList.forEach(param => {
      params[param] = searchParams.get(param);
    });
    return params;
  };

  const memoizedFilter = useMemo(() => getParams("category", "brand", "price[gte]", "price[lte]"), []);

  const filterRef = useRef(memoizedFilter);

  const { itemsData: categories } = useGetWithParams({ getAction: getAllCategories, params: { fields: customInputFields }, returnPayload: true });
  const { itemsData: brands } = useGetWithParams({ getAction: getAllBrands, params: { fields: customInputFields }, returnPayload: true });

  const registerFilter = (name, type, value) => {
    const registerProps = { name, type };
    if (type === "radio") {
      registerProps.defaultChecked = memoizedFilter[name] === value;
      registerProps.onClick = () => {
        filterRef.current[name] = value;
      };
    } else if (type === "number") {
      registerProps.defaultValue = memoizedFilter[name];
      registerProps.onChange = ({ target }) => {
        filterRef.current[name] = target.value;
      };
    }
    return registerProps;
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams(prevSearchParams => {
      for (const [key, value] of Object.entries(filterRef.current)) {
        if (value === null || value === "") prevSearchParams.delete(key);
        else prevSearchParams.set(key, value);
      }
      return prevSearchParams;
    });
  };

  const registerCheckAll = name => {
    return {
      name,
      defaultChecked: !filterRef.current[name],
      onClick () {
        // convert to null to be deleted from searchParams in handleSubmit
        filterRef.current[name] = null;
      }
    };
  };

  const responsive = expandMinWidth ?? "md";
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  return (
    <>
      <Row>
        <Col>
          <Button onClick={handleShow} variant="dark" className={`d-${responsive}-none mb-3`} >البحث المتقدم
          </Button>
        </Col>
      </Row>
      <Row >
        <Col xs="4" md="3" xl="2" className={`d-none d-${responsive}-block`}>
          <Offcanvas show={show} onHide={handleHide} responsive={responsive}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>البحث المتقدم</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <form onSubmit={handleSubmit} className="pb-4 d-grid row-gap-4">
                <div>
                  <h4 className="mb-3">الفئة</h4>
                  <Form.Check type="radio" id="all-categories"
                    label="الكل"
                    {...registerCheckAll("category")}
                  />
                  {
                    categories?.map(category => (
                      <Form.Check
                        key={category._id}
                        {...registerFilter("category", "radio", category._id)}
                        id={category._id}
                        label={category.name}
                      />
                    ))
                  }
                </div>
                <div>
                  <h4 className="mb-3">الماركة</h4>
                  <Form.Check type="radio" id="all-brands"
                    label="الكل"
                    {...registerCheckAll("brand")}
                  />
                  {
                    brands?.map(brand => (
                      <Form.Check
                        key={brand._id}
                        {...registerFilter("brand", "radio", brand._id)}
                        id={brand._id}
                        label={brand.name}
                      />
                    ))
                  }
                </div>
                <div>
                  <h4 className="mb-3">السعر</h4>
                  <div className="d-grid row-gap-2">
                    <div className="d-flex align-items-center column-gap-2">
                      <Form.Label htmlFor="from">من</Form.Label>
                      <Form.Control
                        id="from"
                        {...registerFilter("price[gte]", "number")}
                      />
                    </div>
                    <div className="d-flex align-items-center column-gap-2">
                      <Form.Label htmlFor="to">إلي</Form.Label>
                      <Form.Control
                        id="to"
                        {...registerFilter("price[lte]", "number")}
                      />
                    </div>
                  </div>
                </div>
                <Button type="submit" variant="dark" className="py-2 rounded-0">ابحث</Button>
              </form>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Col>
          {children}
        </Col>
      </Row>

    </>
  );
};

export default SideBarFilter;
