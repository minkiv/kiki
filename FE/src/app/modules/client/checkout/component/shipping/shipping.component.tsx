import React, { FunctionComponent, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import InputComponent from '~/app/component/parts/input/input.component';
import { css } from '@emotion/react';
import { Select } from 'antd';

interface AddressData {
  city: string;
  district: string;
  commune: string;
}

interface AddressProps {
  control: any;
}

const Address: FunctionComponent<AddressProps> = ({ control }) => {
  const [cities, setCities] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [communes, setCommunes] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedCommune, setSelectedCommune] = useState<string>('');

  const loadCities = async () => {
    const response = await fetch('https://provinces.open-api.vn/api/');
    const data = await response.json();
    setCities(data);
  };

  const loadDistricts = async (cityName: string) => {
    const selectedCity = cities.find((city) => city.name === cityName);
    if (selectedCity) {
      const response = await fetch(`https://provinces.open-api.vn/api/p/${selectedCity.code}?depth=2`);
      const data = await response.json();
      setDistricts(data.districts);
    }
  };

  const loadCommunes = async (districtName: string) => {
    const selectedDistrict = districts.find((district) => district.name === districtName);
    if (selectedDistrict) {
      const response = await fetch(`https://provinces.open-api.vn/api/d/${selectedDistrict.code}?depth=2`);
      const data = await response.json();
      setCommunes(data.wards);
    }
  };

  useEffect(() => {
    loadCities();
  }, []);

  useEffect(() => {
    if (selectedCity) {
      loadDistricts(selectedCity);
      setSelectedDistrict('');
      setSelectedCommune('');
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedDistrict) {
      loadCommunes(selectedDistrict);
      setSelectedCommune('');
    }
  }, [selectedDistrict]);

  return (
    <div className='sm:py-20 w-[60%]'>
      <h3 className="title text-[22px] font-semibold"> Địa chỉ giao hàng</h3>
      <div css={itemForm}>
        <form className='form-item rounded-md bg-white py-6 mt-4 max-sm:px-4 space-y-6'>
          <div className='sm:flex pt-5 items-center sm:my-6 max-sm:my-14 w-[460px]'>
            <div className='sm:w-[200px] max-sm:px-3'>Họ và tên</div>
            <div className='w-full h-[34px]'>
              <Controller
                control={control}
                name="fullname"
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
                  return (
                    <div>
                      <InputComponent
                        hideIcon={false}
                        placeholder="Họ và tên"
                        onChange={onChange}
                        value={value}
                        ref={ref}
                        hasErorr={error}
                      />
                      {error && <span className='text-red-600 mt-3 mb-3 text-[1.2rem]'>{error.message}</span>}
                    </div>
                  );
                }}
              />
            </div>
          </div>
          <div className='sm:flex pt-5 items-center sm:my-6 max-sm:my-14 w-[460px]'>
            <div className='sm:w-[200px] max-sm:px-3'>Số điện thoại</div>
            <div className='w-full h-[34px]'>
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
                  return (
                    <div>
                      <InputComponent
                        hideIcon={false}
                        placeholder="Số điện thoại"
                        onChange={onChange}
                        value={value}
                        ref={ref}
                        hasErorr={error}
                      />
                      {error && <span className='text-red-600 mt-3 mb-3 text-[1.2rem]'>{error.message}</span>}
                    </div>
                  );
                }}
              />
            </div>
          </div>
          <div className='sm:flex pt-5 items-center sm:my-6 max-sm:my-14 w-[460px]'>
            <div className='sm:w-[200px] max-sm:px-3'>Tỉnh/Thành Phố</div>
            <div className='w-full h-[34px]'>
              <Controller
                control={control}
                name="city"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <div>
                    <Select
                      className='w-[320px]'
                      onChange={(value: string) => {
                        setSelectedCity(value);
                        setSelectedDistrict('');
                        setSelectedCommune('');
                        onChange(value);
                      }}
                      value={value}
                    >
                      <Select.Option value="">Chọn Tỉnh/Thành Phố</Select.Option>
                      {cities.map((city) => (
                        <Select.Option key={city.code} value={city.name}>
                          {city.name}
                        </Select.Option>
                      ))}
                    </Select>
                    {error && <span className='text-red-600 mt-3 mb-3 text-[1.2rem]'>{error.message}</span>}
                  </div>
                )}
              />
            </div>
          </div>

          <div className='sm:flex pt-5 items-center sm:my-6 max-sm:my-14 w-[460px]'>
            <div className='sm:w-[200px] max-sm:px-3'>Quận/Huyện</div>
            <div className='w-full h-[34px]'>
              <Controller
                control={control}
                name="district"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <div>
                    <Select
                      className='w-[320px]'
                      onChange={(value: string) => {
                        setSelectedDistrict(value);
                        setSelectedCommune('');
                        onChange(value);
                      }}
                      value={value}
                    >
                      <Select.Option value="">Chọn Quận/Huyện</Select.Option>
                      {districts.map((district) => (
                        <Select.Option key={district.code} value={district.name}>
                          {district.name}
                        </Select.Option>
                      ))}
                    </Select>
                    {error && <span className='text-red-600 mt-3 mb-3 text-[1.2rem]'>{error.message}</span>}
                  </div>
                )}
              />

            </div>
          </div>

          <div className='sm:flex pt-5 items-center sm:my-6 max-sm:my-14 w-[460px]'>
            <div className='sm:w-[200px] max-sm:px-3'>Phường/Xã</div>
            <div className='w-full h-[34px]'>
              <Controller
                control={control}
                name="commune"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <div>
                    <Select
                      className='w-[320px]'
                      onChange={(value: string) => {
                        setSelectedCommune(value);
                        onChange(value);
                      }}
                      value={value}
                    >
                      <Select.Option value="">Chọn Phường/Xã</Select.Option>
                      {communes.map((commune) => (
                        <Select.Option key={commune.code} value={commune.name}>
                          {commune.name}
                        </Select.Option>
                      ))}
                    </Select>
                    {error && <span className='text-red-600 mt-3 mb-3 text-[1.2rem]'>{error.message}</span>}
                  </div>
                )}
              />
            </div>

          </div>

          <div className='sm:flex pt-5 items-center sm:my-6 max-sm:my-14 w-[460px]'>
            <div className='sm:w-[200px] max-sm:px-3'>Địa chỉ chi tiết</div>
            <div className='w-full h-[34px]'>
              <Controller
                control={control}
                name="locationDetail"
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
                  return (
                    <div>
                      <InputComponent
                        hideIcon={false}
                        placeholder="Địa chỉ chi tiết"
                        onChange={onChange}
                        value={value}
                        ref={ref}
                        hasErorr={error}
                      />
                      {error && <span className='text-red-600 mt-3 mb-3 text-[1.2rem]'>{error.message}</span>}
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </form>
      </div >
    </div >
  );
};

export default Address;

const itemForm = css`
  padding-left: 20px;
  .bt {
    border: 1px solid rgb(2, 159, 209);
    color: rgb(255, 255, 255);
    background: rgb(0, 182, 240);
  }
  button {
    border: 1px solid gray;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;
