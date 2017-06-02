package cn.chenxubiao.user.repository;

import cn.chenxubiao.user.domain.UserInfo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by chenxb on 17-4-1.
 */
@Repository
@Transactional
public interface UserInfoRepository extends PagingAndSortingRepository<UserInfo, Long> {

    UserInfo findByEmail(String email);

    UserInfo findByCellphone(String cellphone);

    UserInfo findByUserName(String userName);

    UserInfo findByEmailAndPassword(String email, String password);

    UserInfo findByCellphoneAndPassword(String cellphone, String password);

    UserInfo findByUserNameAndPassword(String userName, String password);

    @Query(value = "select count (a) from UserInfo a where a.email = ?1")
    int countByEmail(String email);

    @Query(value = "select count (a) from UserInfo a where a.cellphone = ?1")
    int countByCellphone(String cellphone);

    @Query(value = "select count (a) from UserInfo a where a.userName = ?1")
    int countByUserName(String userName);

    UserInfo findById(int id);

    UserInfo findByIdAndStatus(int id, int status);

    List<UserInfo> findDistinctByUserNameLikeOrDescriptionLikeOrEmailLike
            (String userName, String description, String email);

    List<UserInfo> findAllByIdIn(List<Integer> id);

    List<UserInfo> findAllByIdNotIn(List<Integer> ids);

    List<UserInfo> findAllByIdInOrderByModifyTimeDesc(List<Integer> ids);

    List<UserInfo> findDistinctByUserNameLikeOrDescriptionLikeOrEmailLikeAndIdNotIn
            (String userName, String desctiption, String email, List<Integer> id);

}
