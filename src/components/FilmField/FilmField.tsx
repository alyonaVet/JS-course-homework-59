import React from 'react';
import Button from '../Button/Button';

interface FilmFieldProps {
  title: string;
  onRemove: React.MouseEventHandler;
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilmField: React.FC<FilmFieldProps> = React.memo(({title, onRemove, onChangeTitle}) => {
    return (
      <div className="row mb-3">
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            onChange={onChangeTitle}
            value={title}/>
        </div>
        <div className="col-auto">
          <Button type="button" className="btn btn-danger py-1" onClick={onRemove} children="Delete" />
        </div>
      </div>
    );
  }, (prevProps, nextProps) => {
      return nextProps.title === prevProps.title;
});

export default FilmField;