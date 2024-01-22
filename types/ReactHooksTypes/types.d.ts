import { Dispatch, SetStateAction } from "react";

type EventTxtInput = NativeSyntheticEvent<TextInputChangeEventData>;

/**
 * Typing boolean SetStateAction prop
 *
 * @param {S} - any type
 */
type setStateAction<S> = Dispatch<SetStateAction<S>>;

/**
 * Typing SetValue for useState
 *
 */
// type setStateAction<S> = S | ((prevState: S) => S);

/**
 * Typing value and SetValue for useState prop
 *
 * @param {S} - any type
 */
type useStateProp<S> = [S, setStateAction];

export { EventTxtInput, useStateProp, setStateAction };
