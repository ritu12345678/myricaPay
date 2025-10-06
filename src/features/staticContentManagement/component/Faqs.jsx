import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomDeleteModal from '../../../components/DeleteModal';

// MUI and Icon Imports (as before)
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { TypeBold, TypeItalic, TypeUnderline, ListUl, Link45deg } from 'react-bootstrap-icons';



const FaqEditorContent = ({ id, initialQuestion, initialAnswer }) => {
  const [question, setQuestion] = useState(initialQuestion);
  const [answer, setAnswer] = useState(initialAnswer); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FAQ submission blocked to prevent navigation.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 pt-0">
        <div className="mb-4">
          <label htmlFor={`question-${id}`} className="form-label fw-bold">Question</label>
          <textarea
            id={`question-${id}`}
            className="form-control"
            rows="1"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={`answer-${id}`} className="form-label fw-bold">Answer</label>
          <div className="border rounded">
            <EditorToolbar />
            <textarea
              id={`answer-${id}`}
              className="form-control border-0"
              rows="3"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              style={{ resize: 'none' }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

const EditorToolbar = () => (
  <div className="p-2 border-bottom d-flex bg-light">
    <TypeBold className="me-3 text-secondary" size={20} style={{ cursor: 'pointer' }} title="Bold" />
    <TypeItalic className="me-3 text-secondary" size={20} style={{ cursor: 'pointer' }} title="Italic" />
    <TypeUnderline className="me-3 text-secondary" size={20} style={{ cursor: 'pointer' }} title="Underline" />
    <ListUl className="me-3 text-secondary" size={20} style={{ cursor: 'pointer' }} title="Unordered List" />
    <Link45deg className="me-3 text-secondary" size={20} style={{ cursor: 'pointer' }} title="Insert Link" />
  </div>
);


// --- Main Component ---
const FaqEditor = () => {
  // Initial FAQ data (state would usually be managed via Redux/Context/etc. in a real app)
  const initialFaqData = [
    { id: 1, question: 'How do I reset my password?', answer: '...' },
    { id: 2, question: 'Is my financial data secure?', answer: '...' },
  ];
  const [faqData, setFaqData] = useState(initialFaqData);

  // State for Accordion (single open mode)
  const [expanded, setExpanded] = useState('panel1'); 
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // --- Modal State Management ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // 1. Handler to open the modal
  const handleDeleteClick = (e, item) => {
    e.stopPropagation(); 
    e.preventDefault(); 
    setItemToDelete(item);
    setIsModalOpen(true);
  };

  // 2. Logic to be executed on modal confirm
  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;

    console.log(`Attempting to delete item ID: ${itemToDelete.id}`);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    // Update the FAQ list state (Actual Deletion Logic)
    setFaqData(prevData => prevData.filter(item => item.id !== itemToDelete.id));

    // After deletion, collapse the accordion if it was open
    if (`panel${itemToDelete.id}` === expanded) {
        setExpanded(false);
    }
    
    // The CustomDeleteModal handles closing itself after success, so no need to call setIsModalOpen(false) here.
  };

  return (
    <div className="container py-4">
   
      
      <Box sx={{ width: '100%' }}>
        {faqData.map((item) => {
          const panelId = `panel${item.id}`;
          return (
            <Accordion 
              key={item.id}
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}
              sx={{ marginBottom: 2, boxShadow: 3, border: `1px solid ${grey[300]}` }} 
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${panelId}bh-content`}
                id={`${panelId}bh-header`}
                sx={{ 
                    minHeight: 64, 
                    '& .MuiAccordionSummary-content': { alignItems: 'center', margin: '12px 0' },
                    backgroundColor: grey[50]
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', pr: 2 }}>
                    <Typography sx={{ flexShrink: 0, fontWeight: 'bold' }}>
                        <span className="me-2 text-primary fw-bold">{item.id}.</span>
                        {item.question}
                    </Typography>
                    
                    {/* Trigger the modal when the delete icon is clicked */}
                    <Box
                        component="span" 
                        aria-label={`delete FAQ ${item.id}`}
                        onClick={(e) => handleDeleteClick(e, item)} // <-- Updated Handler
                        sx={{ cursor: 'pointer', color: 'error.main', p: 1 }}
                    >
                        <DeleteIcon fontSize="small" />
                    </Box>
                </Box>
              </AccordionSummary>
              
              <AccordionDetails sx={{ padding: 0 }}>
                <FaqEditorContent 
                  id={item.id} 
                  initialQuestion={item.question} 
                  initialAnswer={item.answer} 
                />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>

      {/* --- Reusable Custom Delete Modal --- */}
      <CustomDeleteModal
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete} // <-- Logic executed on confirm
        title={itemToDelete ? `FAQ Item ${itemToDelete.id} (${itemToDelete.question.substring(0, 20)}...)` : "this item"}
      />
    </div>
  );
};

export default FaqEditor;