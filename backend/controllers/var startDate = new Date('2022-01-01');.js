var startDate = new Date('2022-01-01');
var endDate = new Date('2024-03-23');

// Update document 1
db.datas.updateOne(
  { _id: ObjectId("document_id_1") },
  { 
    $set: { 
      createdAt: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())),
      updatedAt: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
    }
  }
);

// Update document 2
db.datas.updateOne(
  { _id: ObjectId("document_id_2") },
  { 
    $set: { 
      createdAt: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())),
      updatedAt: new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
    }
  }
);
// Update document 3
db.datas.updateOne(
  { _id: ObjectId("document_id_3") },
  { 
    $set: { 
      createdAt: new Date("2022-05-10T13:00:00Z"), // Replace with your desired date
      updatedAt: new Date("2023-09-20T09:30:00Z") // Replace with your desired date
    }
  }
);

// Update document 4
db.datas.updateOne(
  { _id: ObjectId("document_id_4") },
  { 
    $set: { 
      createdAt: new Date("2023-02-15T10:45:00Z"), // Replace with your desired date
      updatedAt: new Date("2024-02-28T16:15:00Z") // Replace with your desired date
    }
  }
);
// Update document 7
db.datas.updateOne(
  { _id: ObjectId("document_id_7") },
  { 
    $set: { 
      createdAt: new Date("2022-09-10T12:00:00Z"), // Replace with your desired date
      updatedAt: new Date("2023-10-25T17:30:00Z") // Replace with your desired date
    }
  }
);

// Update document 8
db.datas.updateOne(
  { _id: ObjectId("document_id_8") },
  { 
    $set: { 
      createdAt: new Date("2023-03-25T10:15:00Z"), // Replace with your desired date
      updatedAt: new Date("2024-02-15T13:45:00Z") // Replace with your desired date
    }
  }
);

// Update document 9
db.datas.updateOne(
  { _id: ObjectId("document_id_9") },
  { 
    $set: { 
      createdAt: new Date("2022-11-05T08:45:00Z"), // Replace with your desired date
      updatedAt: new Date("2023-12-30T09:30:00Z") // Replace with your desired date
    }
  }
);

// Update document 10
db.datas.updateOne(
  { _id: ObjectId("document_id_10") },
  { 
    $set: { 
      createdAt: new Date("2023-04-15T14:30:00Z"), // Replace with your desired date
      updatedAt: new Date("2024-03-05T16:00:00Z") // Replace with your desired date
    }
  }
);

// Update document 11
db.datas.updateOne(
  { _id: ObjectId("document_id_11") },
  { 
    $set: { 
      createdAt: new Date("2022-12-20T11:00:00Z"), // Replace with your desired date
      updatedAt: new Date("2023-09-10T08:45:00Z") // Replace with your desired date
    }
  }
);

// Update document 12
db.datas.updateOne(
  { _id: ObjectId("document_id_12") },
  { 
    $set: { 
      createdAt: new Date("2023-05-05T09:30:00Z"), // Replace with your desired date
      updatedAt: new Date("2024-01-20T12:15:00Z") // Replace with your desired date
    }
  }
);

// Update document 13
db.datas.updateOne(
  { _id: ObjectId("document_id_13") },
  { 
    $set: { 
      createdAt: new Date("2022-08-15T13:45:00Z"), // Replace with your desired date
      updatedAt: new Date("2023-11-25T15:30:00Z") // Replace with your desired date
    }
  }
);

// Update document 14
db.datas.updateOne(
  { _id: ObjectId("document_id_14") },
  { 
    $set: { 
      createdAt: new Date("2023-02-28T16:00:00Z"), // Replace with your desired date
      updatedAt: new Date("2024-03-15T08:15:00Z") // Replace with your desired date
    }
  }
);

// Update document 15
db.datas.updateOne(
  { _id: ObjectId("document_id_15") },
  { 
    $set: { 
      createdAt: new Date("2022-10-10T10:30:00Z"), // Replace with your desired date
      updatedAt: new Date("2023-08-05T14:00:00Z") // Replace with your desired date
    }
  }
);

// Update document 16
db.datas.updateOne(
  { _id: ObjectId("document_id_16") },
  { 
    $set: { 
      createdAt: new Date("2023-06-20T12:15:00Z"), // Replace with your desired date
      updatedAt: new Date("2024-02-10T11:45:00Z") // Replace with your desired date
    }
  }
);

// Update document 17
db.datas.updateOne(
  { _id: ObjectId("document_id_17") },
  { 
    $set: { 
      createdAt: new Date("2023-01-10T09:00:00Z"), // Replace with your desired date
      updatedAt: new Date("2024-03-20T14:30:00Z") // Replace with your desired date
    }
  }
);

// Update document 18
db.datas.updateOne(
  { _id: ObjectId("document_id_18") },
  { 
    $set: { 
      createdAt: new Date("2022-07-25T14:45:00Z"), // Replace with your desired date
      updatedAt: new Date("2023-12-05T16:15:00Z") // Replace with your desired date
    }
  }
);

// Update document 19
db.datas.updateOne(
  { _id: ObjectId("document_id_19") },
  { 
    $set: { 
      createdAt: new Date("2023-04-05T10:15:00Z"), // Replace with your desired date
      updatedAt: new Date("2024-01-30T12:45:00Z") // Replace with your desired date
    }
  }
);

// Update document 20
db.datas.updateOne(
  { _id: ObjectId("document_id_20") },
  { 
    $set: { 
      createdAt: new Date("2022-12-15T11:30:00Z"), // Replace with your desired date
      updatedAt: new Date("2023-10-20T09:00:00Z") // Replace with your desired date
    }
  }
);

// Continue this pattern for documents 5 to 20
