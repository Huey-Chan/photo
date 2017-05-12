package cn.chenxubiao.message.service;

import cn.chenxubiao.common.utils.CollectionUtil;
import cn.chenxubiao.common.utils.consts.BBSConsts;
import cn.chenxubiao.message.bean.SenderInfo;
import cn.chenxubiao.message.domain.Message;
import cn.chenxubiao.message.repository.MessageRepository;
import cn.chenxubiao.user.domain.UserInfo;
import cn.chenxubiao.user.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by chenxb on 17-5-11.
 */
@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private UserInfoService userInfoService;

    @Override
    public void save(Message message) {
        if (message == null) {
            return;
        }
        messageRepository.save(message);
    }

    @Override
    public int countUnLookMsg(int userId) {
        if (userId <= 0) {
            return 0;
        }
        return messageRepository.countByReceiverAndStatus(userId, BBSConsts.MessageStatus.SEND);
    }

    @Override
    public List<Message> findUnLookMsg(int userId) {
        if (userId <= 0) {
            return null;
        }
        List<Message> messageList = messageRepository.findAllByReceiverAndStatus(userId, BBSConsts.MessageStatus.SEND);
        if (CollectionUtil.isNotEmpty(messageList)) {
            for (Message message : messageList) {
                UserInfo userInfo = userInfoService.findById(message.getSender());
                SenderInfo senderInfo = new SenderInfo(userInfo);
                message.setSenderInfo(senderInfo);
            }
        }
        return messageList;
    }

    @Override
    public void updateUnLookMsg(int userId) {
        if (userId <= 0) {
            return;
        }
        List<Message> messageSendList = messageRepository.findAllByReceiverAndStatus(userId, BBSConsts.MessageStatus.SEND);
        if (CollectionUtil.isNotEmpty(messageSendList)) {
            List<Message> messageViewList = new ArrayList<>();
            for (Message message : messageSendList) {
                message.setStatus(BBSConsts.MessageStatus.VIEWD);
                message.setModifyTime(new Date());
                messageViewList.add(message);
            }
            messageRepository.save(messageViewList);
        }
    }
}