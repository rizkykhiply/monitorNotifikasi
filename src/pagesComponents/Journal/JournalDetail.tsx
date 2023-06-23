// Import Modules
import { Field, FieldArray, FormikHelpers } from 'formik';
import dynamic from 'next/dynamic';

// Import Material Modules
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';

// Import Material Icons
import Delete from '@mui/icons-material/Delete';
import AddOutlined from '@mui/icons-material/AddOutlined';

// Import Interfaces
import { JournalInitialValues, JournalTransactionDetail } from '@pages/transaction/journal/create';
import { PropsJournalHeader } from './JournalHeader';

// Import Styles
import {
    CustomFormBox,
    CustomFormControl,
    CustomFormInput,
    CustomFormLabel,
    CustomFormAction,
    ButtonPrimary,
    ButtonSecondary,
} from '@styles/components';
import {
    JournalContainer,
    JournalContent,
    JournalCurrencyInput,
    JournalSubmitContainer,
    JournalSummaryBox,
    JournalSummaryContainer,
    JournalSummaryText,
    JournalSummaryTitle,
    JournalTitle,
} from '@styles/pages';

// Import Components
const InputComponent = dynamic(() => import('@components/Form/Formik/Input'), { ssr: false });
const SelectComponent = dynamic(() => import('@components/Form/Formik/Select'), { ssr: false });

interface PropsJournalDetail extends PropsJournalHeader {
    handleTotalHeader: (amount: number, kurs: number) => string;
    handleTotalDetail: (transactionDet: JournalTransactionDetail[]) => string;
    resetForm: FormikHelpers<JournalInitialValues>['resetForm'];
    isSubmitting: boolean;
}

const JournalDetail = (props: PropsJournalDetail) => {
    // Destructuring Props
    const { values, master, handleTrx, handleTotalHeader, handleTotalDetail, resetForm, isSubmitting } = props;

    return (
        <JournalContent>
            <JournalTitle>Transaction Detail</JournalTitle>
            <Divider sx={{ margin: '5px 0 30px' }} />
            <FieldArray
                name="transactionsDet"
                render={(helpers) => (
                    <>
                        {values?.transactionsDet?.length > 0
                            ? values.transactionsDet.map((_, index) => (
                                  <JournalContainer key={index}>
                                      <CustomFormBox display="flex">
                                          <CustomFormInput spacer maxWidth="200px">
                                              <CustomFormLabel htmlFor={`transactionsDet[${index}].accountIdDet`}>
                                                  Account No *
                                              </CustomFormLabel>
                                              <CustomFormControl fullWidth variant="standard">
                                                  <Field
                                                      component={SelectComponent}
                                                      id={`transactionsDet[${index}].accountIdDet`}
                                                      name={`transactionsDet[${index}].accountIdDet`}
                                                      placeholder="Select Account No"
                                                      menu={master.masterAccount}
                                                  />
                                              </CustomFormControl>
                                          </CustomFormInput>
                                          <CustomFormInput spacer maxWidth="200px">
                                              <CustomFormLabel htmlFor={`transactionsDet[${index}].trxTypeDet`}>
                                                  Transaction *
                                              </CustomFormLabel>
                                              <CustomFormControl fullWidth variant="standard">
                                                  <Field
                                                      component={InputComponent}
                                                      id={`transactionsDet[${index}].trxTypeDet`}
                                                      name={`transactionsDet[${index}].trxTypeDet`}
                                                      placeholder=""
                                                      disabled
                                                  />
                                              </CustomFormControl>
                                          </CustomFormInput>
                                          <CustomFormInput spacer>
                                              <CustomFormLabel htmlFor={`transactionsDet[${index}].descriptionDet`}>
                                                  Description
                                              </CustomFormLabel>
                                              <CustomFormControl fullWidth variant="standard">
                                                  <Field
                                                      component={InputComponent}
                                                      id={`transactionsDet[${index}].descriptionDet`}
                                                      name={`transactionsDet[${index}].descriptionDet`}
                                                      placeholder=""
                                                  />
                                              </CustomFormControl>
                                          </CustomFormInput>
                                          <CustomFormInput spacer maxWidth="150px">
                                              <CustomFormLabel htmlFor={`transactionsDet[${index}].kursDet`}>Kurs *</CustomFormLabel>
                                              <CustomFormControl fullWidth variant="standard">
                                                  <Field
                                                      component={InputComponent}
                                                      id={`transactionsDet[${index}].kursDet`}
                                                      name={`transactionsDet[${index}].kursDet`}
                                                      type="number"
                                                      placeholder="1"
                                                  />
                                              </CustomFormControl>
                                          </CustomFormInput>
                                          <CustomFormInput maxWidth="230px">
                                              <CustomFormLabel htmlFor={`transactionsDet[${index}].amountDet`}>Amount *</CustomFormLabel>
                                              <CustomFormControl fullWidth variant="standard">
                                                  <Field
                                                      component={InputComponent}
                                                      id={`transactionsDet[${index}].amountDet`}
                                                      name={`transactionsDet[${index}].amountDet`}
                                                      type="number"
                                                      placeholder="0"
                                                      InputProps={{
                                                          startAdornment: (
                                                              <InputAdornment position="start">
                                                                  <JournalCurrencyInput>
                                                                      {
                                                                          master.masterCurrency?.find(
                                                                              (data) => +data.value === +values.currencyId,
                                                                          )?.currencyFormat
                                                                      }
                                                                  </JournalCurrencyInput>
                                                              </InputAdornment>
                                                          ),
                                                      }}
                                                  />
                                              </CustomFormControl>
                                          </CustomFormInput>
                                      </CustomFormBox>
                                      <CustomFormAction textAlign="right" mt={1}>
                                          <ButtonSecondary size="small" variant="text" color="error" onClick={() => helpers.remove(index)}>
                                              <Delete />
                                              Remove
                                          </ButtonSecondary>
                                      </CustomFormAction>
                                  </JournalContainer>
                              ))
                            : null}
                        <ButtonSecondary
                            variant="text"
                            color="primary"
                            onClick={() =>
                                helpers.push({
                                    accountIdDet: '',
                                    trxTypeDet: handleTrx(+values.trxTypeHead),
                                    descriptionDet: '',
                                    kursDet: '1',
                                    amountDet: '',
                                })
                            }
                        >
                            <AddOutlined sx={{ fontSize: '14px' }} />
                            Add Transaction
                        </ButtonSecondary>
                        <Divider sx={{ margin: '30px 0' }} />
                    </>
                )}
            />
            <JournalSummaryContainer>
                <JournalSummaryBox>
                    <JournalSummaryTitle>Debit</JournalSummaryTitle>
                    <JournalSummaryText>
                        {+values.trxTypeHead === 1
                            ? handleTotalHeader(+values.amountHead, +values.kursHead)
                            : values.transactionsDet[0]?.trxTypeDet
                            ? handleTotalDetail(values.transactionsDet)
                            : '-'}
                    </JournalSummaryText>
                </JournalSummaryBox>
                <JournalSummaryBox>
                    <JournalSummaryTitle>Credit</JournalSummaryTitle>
                    <JournalSummaryText>
                        {+values.trxTypeHead === 2
                            ? handleTotalHeader(+values.amountHead, +values.kursHead)
                            : values.transactionsDet[0]?.trxTypeDet
                            ? handleTotalDetail(values.transactionsDet)
                            : '-'}
                    </JournalSummaryText>
                </JournalSummaryBox>
                <JournalSummaryBox>
                    <JournalSummaryTitle fontWeight={700}>Total Amount</JournalSummaryTitle>
                    <JournalSummaryText>
                        {values.transactionsDet[0]?.trxTypeDet ? handleTotalDetail(values.transactionsDet) : '-'}
                    </JournalSummaryText>
                </JournalSummaryBox>
            </JournalSummaryContainer>
            <CustomFormBox display="block" mb={4}>
                <CustomFormInput>
                    <CustomFormLabel htmlFor="notes">Notes</CustomFormLabel>
                    <CustomFormControl fullWidth variant="standard">
                        <Field component={InputComponent} id="notes" name="notes" multiline rows={4} placeholder="" />
                    </CustomFormControl>
                </CustomFormInput>
            </CustomFormBox>
            <JournalSubmitContainer>
                <ButtonSecondary fullWidth variant="outlined" sx={{ marginRight: '10px' }} onClick={() => resetForm()}>
                    Cancel
                </ButtonSecondary>
                <ButtonPrimary fullWidth variant="contained" type="submit" disabled={isSubmitting}>
                    Save
                </ButtonPrimary>
            </JournalSubmitContainer>
        </JournalContent>
    );
};

export default JournalDetail;
