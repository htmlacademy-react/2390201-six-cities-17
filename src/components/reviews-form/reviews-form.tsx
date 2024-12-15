import { useState, ChangeEvent } from 'react';

function ReviewsForm (): JSX.Element {
  const [reviewsFormData, setReviewsFormData] = useState({
    rating: 0,
    review: ''
  });

  const handleRatingChange = (evt:ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setReviewsFormData({...reviewsFormData, rating: Number(value)});
  };

  const handleReviewChange = (evt:ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setReviewsFormData({...reviewsFormData, review: value});
  };

  const setTitle = (starValue:string):string => {
    switch (starValue) {
      case '1': return 'terribly';
      case '2': return 'badly';
      case '3': return 'not bad';
      case '4': return 'good';
      case '5': return 'perfect';
      default: return 'perfect';
    }
  };

  type StarElementProps = {
    starValue:string;
  };

  function StarElement ({starValue}: StarElementProps): JSX.Element {
    return (
      <>
        <input className="form__rating-input visually-hidden" name="rating" value={starValue} id={`${starValue}-stars`} type="radio" onChange={handleRatingChange}/>
        <label htmlFor={`${starValue}-stars`} className="reviews__rating-label form__rating-label" title={setTitle(starValue)}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </>
    );
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <StarElement starValue={'5'} />
        {/* Остальные звёзды пока не заменяются на StarElement, т.к. нарушается поведение при выборе - звёзды не выделяются ховером*/}

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleReviewChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;